import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private _http: HttpClient) {}

  login(user: any): Observable<any> {
    return this._http.post('https://reqres.in/api/login', user);
  }

  register(user: any): Observable<any> {
    return this._http.post('https://reqres.in/api/register', user);
  }
}
