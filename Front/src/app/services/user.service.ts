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
import { Firestore, addDoc, collection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(
    private _http: HttpClient,
    private _auth: Auth,
    private _firestore: Firestore
  ) {}

  getRegister({ email, password }: any) {
    return createUserWithEmailAndPassword(this._auth, email, password);
  }

  getLogin({ email, password }: any) {
    return signInWithEmailAndPassword(this._auth, email, password);
  }

  getLoginWhithGoogle() {
    return signInWithPopup(this._auth, new GoogleAuthProvider());
  }

  addUser(user: any) {
    const userRef = collection(this._firestore, 'user');
    return addDoc(userRef, user);
  }

  getLogout() {
    return signOut(this._auth);
  }
}
