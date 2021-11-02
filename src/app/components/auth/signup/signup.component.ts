import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';

import { AuthService } from 'src/app/services/auth.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private as :AuthService,
              private us :UserService,
              private router:Router) { }

errorMessage:string ='';
  ngOnInit(): void {
  }
  signUp(form ){
    let data:User = form.value;
    console.log(data)
    this.as.signup(data.email,data.password)
    .then(result => {
      this.errorMessage=''
      this.us.addNewUser(result.user.uid,data.name,data.adresse,data.password).then(()=>{
          this.router.navigate(['/'])
      })//.catch(error=>console.log('fs',error))
    })
    .catch(err =>{
      //console.log('auth',err)
      this.errorMessage=err.message;
    })
}
}
