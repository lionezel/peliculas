import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map, tap } from 'rxjs';
import { Movie, PeliculasResponse } from '../interface/peliculas.interface';
import { MovieDetails } from '../interface/pelicula.interface';

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

  list_popular_movie(page: number): Observable<any> {
    return this._htpp
      .get<PeliculasResponse>(`${this.baseURL}/movie/popular?page=${page}`, {
        params: this.params,
      })
      .pipe(map((res) => res.results));
  }

  list_now_playing_movie(page: number): Observable<any> {
    return this._htpp
      .get<PeliculasResponse>(
        `${this.baseURL}/movie/now_playing?page=${page}`,
        {
          params: this.params,
        }
      )
      .pipe(map((res) => res.results));
  }

  list_upcoming_movie(page: number): Observable<any> {
    return this._htpp
      .get<PeliculasResponse>(`${this.baseURL}/movie/upcoming?page=${page}`, {
        params: this.params,
      })
      .pipe(map((res) => res.results));
  }

  list_top_rated_movie(page: number): Observable<any> {
    return this._htpp
      .get<PeliculasResponse>(`${this.baseURL}/movie/top_rated?page=${page}`, {
        params: this.params,
      })
      .pipe(map((res) => res.results));
  }

  detail_movie(id: any): Observable<MovieDetails[]> {
    return this._htpp
      .get<MovieDetails[]>(`${this.baseURL}/movie/${id}`, {
        params: this.params,
      })
      .pipe(map((res) => res));
  }

  credits_movie(id: any): Observable<any> {
    return this._htpp.get(`${this.baseURL}/movie/${id}/credits`, {
      params: this.params,
    });
  }
}
