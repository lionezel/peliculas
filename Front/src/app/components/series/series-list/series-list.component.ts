import { Component } from '@angular/core';
import { serieService } from 'src/app/services/serie.service';

@Component({
  selector: 'app-series-list',
  templateUrl: './series-list.component.html',
  styleUrls: ['./series-list.component.css'],
})
export class SeriesListComponent {
  public popular_serie_arr: any;
  public airing_Today_serie_arr: any;

  constructor(private _serieServies: serieService) {
    this.list_popular_series();
  }

  list_popular_series() {
    this._serieServies.list_popular_series().subscribe((response) => {
      console.log(response);
      this.popular_serie_arr = response.results;
    });
  }
}
