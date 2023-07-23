import { Component } from '@angular/core';
import { MovieServicesService } from 'src/app/services/movie-services.service';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.css']
})
export class MoviesListComponent {
  public movies_arr: any
  public panelOpenState = false;
  

  constructor(private _movieServices: MovieServicesService) {
    this._movieServices.list_popular_movie().subscribe((response) => {
      console.log(response);
      this.movies_arr = response.results
    });
  }

  filter(){
    const result = this.movies_arr.find 
  }
}
