import { Component, OnInit } from '@angular/core';
import { MovieServicesService } from 'src/app/services/movie-services.service';

@Component({
  selector: 'app-now-playing-page',
  templateUrl: './now-playing-page.component.html',
  styleUrls: ['./now-playing-page.component.css'],
})
export class NowPlayingPageComponent implements OnInit {
  public now_playing_arr: any;

  constructor(private _movieServices: MovieServicesService) {}

  ngOnInit(): void {
    this.getAllNow_Playing();
  }

  getAllNow_Playing() {
    this._movieServices.list_now_playing_movie(1).subscribe((response) => {
      this.now_playing_arr = response;
    });
  }
}
