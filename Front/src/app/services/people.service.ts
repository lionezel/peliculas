import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PeopleService {

  private baseURL: string = 'https://api.themoviedb.org/3';
  constructor(private _htpp: HttpClient) {}

  get params() {
    return {
      api_key: 'b917f330fabefefa9f236c84ad4c1179',
    };
  }

  list_popular_people(): Observable<any> {
    return this._htpp.get(`${this.baseURL}/person/popular`, {
      params: this.params,
    });
  }
}
