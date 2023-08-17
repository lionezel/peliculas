import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  Auth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
} from '@angular/fire/auth';
import { CookieService } from 'ngx-cookie-service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(
    private _http: HttpClient,
    private _cookies: CookieService,
    private _auth: Auth
  ) {}

  login(user: any): Observable<any> {
    return this._http.post('https://reqres.in/api/login', user);
  }

  register(user: any): Observable<any> {
    return this._http.post('https://reqres.in/api/register', user);
  }

  setToken(token: string) {
    this._cookies.set('token', token);
  }

  getToken() {
    return this._cookies.get('token');
  }

  getUser() {
    return this._http.get('https://reqres.in/api/users/2');
  }
  getUserLogged() {
    const token = this.getToken();
  }

  getRegister({ email, password }: any) {
    return createUserWithEmailAndPassword(this._auth, email, password);
  }

  getLogin({ email, password }: any) {
    return signInWithEmailAndPassword(this._auth, email, password);
  }

  getLoginWhithGoogle() {
    return signInWithPopup(this._auth, new GoogleAuthProvider());
  }

  getLogout() {
    return signOut(this._auth);
  }
}
