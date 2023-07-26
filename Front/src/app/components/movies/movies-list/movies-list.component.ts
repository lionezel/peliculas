import { Component, OnInit } from '@angular/core';
import { MovieServicesService } from 'src/app/services/movie-services.service';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.css'],
})
export class MoviesListComponent implements OnInit {
  public movies_arr: any;
  public sort_by: any;
  public order: any;
  public filter_movies = '';
  public percentage_movie: any;

  constructor(private _movieServices: MovieServicesService) {
    this.list_popular_movie();
  }

  ngOnInit(): void {
    this.order = [
      { name: 'Popularidad ddescendente' },
      { name: 'Popularidad descendente', value: 'Popularidad descendente' },
    ];
  }

  list_popular_movie() {
    this._movieServices.list_popular_movie().subscribe((response) => {
      console.log(response);
      this.movies_arr = response.results;
    });
  }

  percentage() {
    if (this.percentage_movie >= 7.5) {
      this.percentage_movie
    }
  }
}
