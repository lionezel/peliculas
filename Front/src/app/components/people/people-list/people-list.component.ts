import { Component } from '@angular/core';
import { PeopleService } from 'src/app/services/people.service';

@Component({
  selector: 'app-people-list',
  templateUrl: './people-list.component.html',
  styleUrls: ['./people-list.component.css'],
})
export class PeopleListComponent {
  public people_arr: any;

  constructor(private _peopleServices: PeopleService) {
    this._peopleServices.list_popular_people().subscribe((response) => {
      console.log(response);
      this.people_arr = response.results;
    });
  }
}
