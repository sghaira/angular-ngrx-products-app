import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private BASE_URL = 'http://localhost:1337';

  constructor(private http: HttpClient) { }

  getToken(): string|null {
    return localStorage.getItem('token');
  }

  logIn(email: string, password: string): Observable<any> {
    const url = `${this.BASE_URL}/login`;
    return this.http.post<User>(url, { email, password });
  }

  signUp(email: string, password: string): Observable<User> {
    const url = `${this.BASE_URL}/register`;
    return this.http.post<User>(url, { email, password });
  }

  getStatus(): Observable<User> {
    const url = `${this.BASE_URL}/status`;
    return this.http.get<User>(url);
  }

}
