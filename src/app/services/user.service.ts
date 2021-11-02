import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {


  constructor(private fs:AngularFirestore,private as:AuthService) { }

  addNewUser(id,name, adresse,password){
     return this.fs.doc('users/'+id).set({
        name,
        adresse,
        password,

      })
  }
  getUserData(){
    return this.fs.doc('users/'+ this.as.userId).valueChanges()
  }
}
