import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { combineLatest } from 'rxjs';
import { Genre, MovieDetails } from 'src/app/interface/pelicula.interface';
import { MovieServicesService } from 'src/app/services/movie-services.service';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css'],
})
export class MovieDetailComponent {
  public detail_arr: any;
  public credits_arr: any;
  public genres_arr: any;
  public keyword_arr: any;

  constructor(
    private _movieServices: MovieServicesService,
    private activatedRoute: ActivatedRoute
  ) {
    const { id } = this.activatedRoute.snapshot.params;

    //detail
    this._movieServices.detail_movie(id).subscribe((response) => {
      console.log(response);
      this.detail_arr = response;

      //reparto
      this._movieServices.credits_movie(id).subscribe((response) => {
        this.credits_arr = response.cast;
      });

      //category
      this._movieServices.detail_movie(id).subscribe((response) => {
        console.log(this.genres_arr);
      });

      //keyword
      this._movieServices.keyword_movie(id).subscribe((response) => {
        this.keyword_arr = response.keywords;
        console.log(this.keyword_arr);
      });
    });
  }
}
