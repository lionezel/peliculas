import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map, tap } from 'rxjs';
import { Movie, PeliculasResponse } from '../interface/peliculas.interface';

@Injectable({
  providedIn: 'root',
})
export class MovieServicesService {
  private baseURL: string = 'https://api.themoviedb.org/3';
  private page = 1;

  constructor(private _htpp: HttpClient) {}

  get params() {
    return {
      api_key: 'b917f330fabefefa9f236c84ad4c1179',
      leanguage: 'es-ES',
      page: this.page.toString(),
    };
  }

  list_popular_movie(): Observable<Movie[]> {
    return this._htpp
      .get<PeliculasResponse>(`${this.baseURL}/movie/popular`, {
        params: this.params,
      })
      .pipe(
        map((res) => res.results),
        tap(() => {
          this.page + 1;
        })
      );
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
