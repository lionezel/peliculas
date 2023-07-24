import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { combineLatest } from 'rxjs';
import { MovieServicesService } from 'src/app/services/movie-services.service';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent {
  public detail_arr: any

  

  constructor(private _movieServices: MovieServicesService, private activatedRoute: ActivatedRoute,) {
    const {id} = this.activatedRoute.snapshot.params
    this._movieServices.detail_movie(id).subscribe(([movie]) => {
      console.log(movie)
      this.detail_arr =  movie;
    });

  }

  
}
