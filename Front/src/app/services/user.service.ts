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
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private _http: HttpClient, private _auth: Auth) {}

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
