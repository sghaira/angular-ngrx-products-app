import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginError: string = ''
  constructor(private as:AuthService,private router:Router) { }

  ngOnInit() {
  }
  logIn(form){
    let data = form.value;
    this.as.login(data.email, data.password)
    .then(()=>{
      this.router.navigate(['/'])
  })
.catch(err => this.loginError=err.message)
}
}

