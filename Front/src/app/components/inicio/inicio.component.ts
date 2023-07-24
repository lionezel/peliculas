import { Component } from '@angular/core';
import { MovieServicesService } from 'src/app/services/movie-services.service';
import { serieService } from 'src/app/services/serie.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css'],
})
export class InicioComponent {
  public discover_movie_arr: any;
  public discover_serie_arr: any;

  constructor(
    private _movieServices: MovieServicesService,
    private _serieServices: serieService
  ) {
    this._movieServices.discover_movie().subscribe((response) => {
      this.discover_movie_arr = response.results;

      this._serieServices.list_discover_series().subscribe((response) => {
        this.discover_serie_arr = response.results;
      });
    });
  }
}
