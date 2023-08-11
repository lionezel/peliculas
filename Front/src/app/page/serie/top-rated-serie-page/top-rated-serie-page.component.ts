import { Component, OnInit } from '@angular/core';
import { serieService } from 'src/app/services/serie.service';

@Component({
  selector: 'app-top-rated-serie-page',
  templateUrl: './top-rated-serie-page.component.html',
  styleUrls: ['./top-rated-serie-page.component.css'],
})
export class TopRatedSeriePageComponent implements OnInit {
  public topRated_arr: any;

  constructor(private _serieServices: serieService) {}

  ngOnInit(): void {
    this.list_topRated_serie();
  }

  list_topRated_serie() {
    this._serieServices.list_top_rated_series().subscribe((response) => {
      this.topRated_arr = response.results;
    });
  }
}
