import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class serieService {
  private baseURL: string = 'https://api.themoviedb.org/3';
  constructor(private _htpp: HttpClient) {}

  get params() {
    return {
      api_key: 'b917f330fabefefa9f236c84ad4c1179',
    };
  }

  list_discover_series(): Observable<any> {
    return this._htpp.get(`${this.baseURL}/discover/tv`, {
      params: this.params,
    });
  }

  list_popular_series(): Observable<any> {
    return this._htpp.get(`${this.baseURL}/tv/popular`, {
      params: this.params,
    });
  }

  list_airing_Today_series(): Observable<any> {
    return this._htpp.get(`${this.baseURL}/tv/airing_today`, {
      params: this.params,
    });
  }

  list_on_the_air_series(): Observable<any> {
    return this._htpp.get(`${this.baseURL}/tv/on_the_air`, {
      params: this.params,
    });
  }

  list_top_rated_series(): Observable<any> {
    return this._htpp.get(`${this.baseURL}/tv/top_rated`, {
      params: this.params,
    });
  }

  detail_series(id: string): Observable<any> {
    return this._htpp.get(`${this.baseURL}/tv/${id}`, {
      params: this.params,
    });
  }

  detail_credits_series(id: string): Observable<any> {
    return this._htpp.get(`${this.baseURL}/tv/${id}/credits`, {
      params: this.params,
    });
  }

  detail_recommendations_series(id: string): Observable<any> {
    return this._htpp.get(`${this.baseURL}/tv/${id}/recommendations`, {
      params: this.params,
    });
  }

  
}
