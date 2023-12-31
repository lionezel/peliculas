import { Component, Input, OnInit } from '@angular/core';
import { HomeSearchService } from 'src/app/services/home-search.service';
import { InicioService } from 'src/app/services/inicio.service';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.css'],
})
export class SearchPageComponent implements OnInit {
  public filter_search: any;

  constructor(
    private _home_search: HomeSearchService,
    private _inicioServices: InicioService
  ) {}

  ngOnInit(): void {
    this._home_search.disparador.subscribe((data) => {
      this._inicioServices.search_movie(data).subscribe((response) => {
        this.filter_search = response.results;
        console.log(this.filter_search);
      });
    });
  }
}
