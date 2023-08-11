import { Component, OnInit } from '@angular/core';
import { serieService } from 'src/app/services/serie.service';

@Component({
  selector: 'app-airing-today-page',
  templateUrl: './airing-today-page.component.html',
  styleUrls: ['./airing-today-page.component.css'],
})
export class AiringTodayPageComponent implements OnInit {
  public airing_today_arr: any;

  constructor(private _serieServices: serieService) {}

  ngOnInit(): void {
    this.list_airing_today_serie();
  }

  list_airing_today_serie() {
    this._serieServices.list_airing_Today_series().subscribe((response) => {
      console.log(response);
      this.airing_today_arr = response.results;
    });
  }
}
