import { TranslationLoaderService } from 'src/app/services/translation-loader.service';

import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { AuthService } from 'src/app/services/auth.service';
import { UserService } from 'src/app/services/user.service';
import { Languages } from 'prismjs';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  languages: Languages[];
  selectedLanguage: any;
  lang
  isOpen :boolean = false;
  isUser :boolean = false;
  isAdmin:boolean = false;
  constructor(private as:AuthService,
              private us:UserService,
              private translateService: TranslateService,
              private fuseTranslateService: TranslationLoaderService,) { }

  ngOnInit() {
    this.as.user.subscribe(user=>{
      console.log(user)
      if(user){
        this.isUser=true;
        this.as.userId=user.uid
        this.us.getUserData().subscribe(data=>{
          if(data['admin'])
          this.isAdmin=true;
        })
      }
      else {
        this.isUser=false
        this.as.userId=''
      }
    })
    this.fuseTranslateService.getLangList().subscribe(data => {
      this.languages = data
      const lang = localStorage.getItem('lang') ?? this.translateService.getBrowserLang();

      if (lang) {
          this.translateService.use(lang);
      }

      this.selectedLanguage = this.languages.find(x => x.id.toString().toLowerCase() ==
          lang.toLowerCase())

  });
    this.lang=localStorage.getItem('lang')||'en';
  }

  toggleNavBar(){
    this.isOpen = !this.isOpen;
  }
  logout(){
      this.as.logout()
  }

  changeLanguage(event){
   // this.translateService.setDefaultLang('en')
    this.translateService.use(event.target.value)
  }
  setLanguage(lang): void {
    // Set the selected language for the toolbar
    this.selectedLanguage = lang;
    localStorage.setItem("lang", lang.id);
    // Use the selected language for translations
    this.translateService.use(lang.id);
    //call event to subscription in aggrid
    //this.configserv.eventTranslateHeadersTable();
   // window.location.reload();


}
}
