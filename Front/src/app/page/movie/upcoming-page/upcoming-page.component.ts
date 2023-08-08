import { Component, OnInit } from '@angular/core';
import { MovieServicesService } from 'src/app/services/movie-services.service';

@Component({
  selector: 'app-upcoming-page',
  templateUrl: './upcoming-page.component.html',
  styleUrls: ['./upcoming-page.component.css'],
})
export class UpcomingPageComponent implements OnInit {
  public upcoming_arr: any;

  constructor(private _movieServices: MovieServicesService) {}

  ngOnInit(): void {
    this.getAll_Upcoming();
  }

  getAll_Upcoming() {
    this._movieServices.list_upcoming_movie(1).subscribe((response) => {
      this.upcoming_arr = response;
    });
  }
}
