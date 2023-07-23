import { Component } from '@angular/core';
import { MovieServicesService } from 'src/app/services/movie-services.service';


@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css'],
})
export class InicioComponent {
  public discover_arr: any;

  constructor(private _movieServices: MovieServicesService) {
    this._movieServices.discover_movie().subscribe((response) => {
      this.discover_arr = response.results;
    });
    
  }
}
