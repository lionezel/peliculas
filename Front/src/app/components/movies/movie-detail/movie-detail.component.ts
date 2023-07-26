import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { combineLatest } from 'rxjs';
import { MovieServicesService } from 'src/app/services/movie-services.service';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent implements OnInit{
  public detail_arr: any


  

  constructor(private _movieServices: MovieServicesService, private activatedRoute: ActivatedRoute,) {
    const {id} = this.activatedRoute.snapshot.params
    this._movieServices.detail_movie(id).subscribe((response) => {
      console.log(response)
      this.detail_arr =  response;
    });
  }

ngOnInit(): void {

}

  
}
