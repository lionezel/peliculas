import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Movie, PeliculasResponse } from '../interface/peliculas.interface';

@Injectable({
  providedIn: 'root',
})
export class MovieServicesService {
  private baseURL: string = 'https://api.themoviedb.org/3';

  constructor(private _htpp: HttpClient) {}

  get params() {
    return {
      api_key: 'b917f330fabefefa9f236c84ad4c1179',
    };
  }

  list_popular_movie(): Observable<any> {
    return this._htpp.get(`${this.baseURL}/movie/popular`, {
      params: this.params,
    });
  }
  discover_movie(): Observable<any> {
    return this._htpp.get(`${this.baseURL}/discover/movie`, {
      params: this.params,
    });
  }

  detail_movie(id: any): Observable<any> {
    return this._htpp.get(`${this.baseURL}/movie/${id}`, {
      params: this.params,
    });
  }

  credits_movie(id: any): Observable<any> {
    return this._htpp.get(`${this.baseURL}/movie/${id}/credits`, {
      params: this.params,
    });
  }
}
