import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieServicesService } from 'src/app/services/movie-services.service';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent {
  public detail_arr: any

  

  constructor(private _movieServices: MovieServicesService, private activatedRoute: ActivatedRoute,) {
    const getParamsId = this.activatedRoute.snapshot.paramMap.get('id');
    this.getMovieDetail(getParamsId)
  }

  getMovieDetail(id: any){
    this._movieServices.detail_movie(id).subscribe(async(response) => {
      console.log(response)
      this.detail_arr = await response;
    });
  }
}
