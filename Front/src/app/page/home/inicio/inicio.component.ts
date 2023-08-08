import { query } from '@angular/animations';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { InicioService } from 'src/app/services/inicio.service';
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
  public filter: string = '';
  public search_arr: string[] = [];

  constructor(
    private _inicioServices: InicioService,
    private _serieServices: serieService,
    private _router: Router
  ) {
    this.discover_movie();
  }

  discover_movie() {
    this._inicioServices.discover_movie().subscribe((response) => {
      console.log(response);
      this.discover_movie_arr = response.results;
    });
  }

  search_movie() {
    this._router.navigate(['/search']);
    if (this.filter.trim()) {
      this._inicioServices.search_movie(this.filter).subscribe((response) => {
        console.log(response);
      });
    }
  }
}
