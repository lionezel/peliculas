import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class InicioService {
  private baseURL: string = 'https://api.themoviedb.org/3';

  constructor(private _htpp: HttpClient) {}

  get params() {
    return {
      api_key: 'b917f330fabefefa9f236c84ad4c1179',
    };
  }

  discover_movie(): Observable<any> {
    return this._htpp.get(`${this.baseURL}/discover/movie`, {
      params: this.params,
    });
  }  
}
