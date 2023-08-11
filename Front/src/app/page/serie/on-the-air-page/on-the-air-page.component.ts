import { Component, OnInit } from '@angular/core';
import { serieService } from 'src/app/services/serie.service';

@Component({
  selector: 'app-on-the-air-page',
  templateUrl: './on-the-air-page.component.html',
  styleUrls: ['./on-the-air-page.component.css'],
})
export class OnTheAirPageComponent implements OnInit {
  public on_the_air_arr: any;

  constructor(private _serieServices: serieService) {}

  ngOnInit(): void {
    this.list_on_the_air_arr();
  }

  list_on_the_air_arr() {
    this._serieServices.list_on_the_air_series().subscribe((response) => {
      this.on_the_air_arr = response.results;
    });
  }
}
