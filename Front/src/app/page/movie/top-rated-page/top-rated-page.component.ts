import { Component, OnInit } from '@angular/core';
import { MovieServicesService } from 'src/app/services/movie-services.service';

@Component({
  selector: 'app-top-rated-page',
  templateUrl: './top-rated-page.component.html',
  styleUrls: ['./top-rated-page.component.css'],
})
export class TopRatedPageComponent implements OnInit {
  public top_rated_arr: any;

  constructor(private _movieServices: MovieServicesService) {}

  ngOnInit(): void {
    this.getAllTop_Rated();
  }

  getAllTop_Rated() {
    this._movieServices.list_top_rated_movie(1).subscribe((response) => {
      this.top_rated_arr = response;
    });
  }
}
