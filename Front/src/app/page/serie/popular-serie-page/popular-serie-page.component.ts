import { Component, OnInit } from '@angular/core';
import { serieService } from 'src/app/services/serie.service';

@Component({
  selector: 'app-popular-serie-page',
  templateUrl: './popular-serie-page.component.html',
  styleUrls: ['./popular-serie-page.component.css'],
})
export class PopularSeriePageComponent implements OnInit {
  public popular_serie_arr: any;

  constructor(private _serieServices: serieService) {}

  ngOnInit(): void {
    this.list_popular_serie();
  }

  list_popular_serie() {
    this._serieServices.list_popular_series().subscribe((response) => {
      this.popular_serie_arr = response.results;
    });
  }
}
