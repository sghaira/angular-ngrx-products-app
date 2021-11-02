import { Observable } from 'rxjs';

import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

 user: Observable<firebase.User>
 userId:string=''
  constructor(  private afAuth: AngularFireAuth) {
    this.user=afAuth.user
  }

  signup(email, password){
   return this.afAuth.createUserWithEmailAndPassword(email, password)
  }

  login(email, password){
   return this.afAuth.signInWithEmailAndPassword(email, password)
  }

  logout(){
    return this.afAuth.signOut()
  }
}



