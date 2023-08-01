import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Movie } from 'src/app/interface/peliculas.interface';
import { MovieServicesService } from 'src/app/services/movie-services.service';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.css'],
})
export class MoviesListComponent {
  public movies_arr: Movie[] = [];
  public sort_by: any;
  public order: any;
  public filter_movies = '';
  public percentage_movie: any;
  public page_arr: any;

  constructor(
    private _movieServices: MovieServicesService,
    private _router: Router
  ) {
    this.list_popular_movie();
  }



  list_popular_movie() {
    this._movieServices.list_popular_movie().subscribe((movie) => {
      this.movies_arr = movie;
    });
  }

  percentage() {
    if (this.percentage_movie >= 7.5) {
      this.percentage_movie;
    }
  }

  next: number = +1;

  firstpagelinkicon: any;

  back: number = 10;
}
