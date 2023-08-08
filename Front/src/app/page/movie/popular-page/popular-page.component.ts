import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MovieServicesService } from 'src/app/services/movie-services.service';

@Component({
  selector: 'app-popular-page',
  templateUrl: './popular-page.component.html',
  styleUrls: ['./popular-page.component.css'],
})
export class PopularPageComponent {
  public movies_arr: any;
  public filter_movies = '';
  public page = 1;
  public percentage_movie: any;

  constructor(
    private _movieServices: MovieServicesService,
    private _router: Router
  ) {
    this.list_popular_movie();
  }

  list_popular_movie() {
    this._movieServices.list_popular_movie(this.page).subscribe((movie) => {
      this.movies_arr = movie;
      console.log(this.movies_arr);
    });
  }

  percentage() {
    if (this.percentage_movie >= 7.5) {
      this.percentage_movie;
    }
  }

  first: number = 0;

  rows: number = 10;

  onPageChange() {
    this._movieServices.list_popular_movie(this.page).subscribe((movie) => {
      this.movies_arr = movie;
      console.log(this.movies_arr);
    });
  }
}
