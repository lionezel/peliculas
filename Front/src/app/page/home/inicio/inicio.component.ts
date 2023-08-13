import { query } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HomeSearchService } from 'src/app/services/home-search.service';
import { InicioService } from 'src/app/services/inicio.service';
import { MovieServicesService } from 'src/app/services/movie-services.service';
import { serieService } from 'src/app/services/serie.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css'],
})
export class InicioComponent implements OnInit {
  public discover_movie_arr: any;
  public discover_serie_arr: any;
  public filter: string = '';
  public search_arr: string[] = [];
  public responsiveOptions: any[] | undefined;

  constructor(
    private _inicioServices: InicioService,
    private _search_home: HomeSearchService,
    private _router: Router
  ) {}
  ngOnInit(): void {
    this.discover_serie();
    this.discover_movie();
  }
  discover_movie() {
    this._inicioServices.discover_movie().subscribe((response) => {
      this.discover_movie_arr = response.results;
    });
  }

  discover_serie() {
    this._inicioServices.discover_serie().subscribe((response) => {
      this.discover_serie_arr = response.results;
    });
  }

  search_movie() {
    this._router.navigate(['/search']);
    if (this.filter.trim()) {
      this._search_home.disparador.emit({
        data: this.filter,
      });
    }
  }
}
