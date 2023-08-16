import { Component, OnInit } from '@angular/core';
import { PeopleService } from 'src/app/services/people.service';

@Component({
  selector: 'app-people-list',
  templateUrl: './people-list.component.html',
  styleUrls: ['./people-list.component.css'],
})
export class PeopleListComponent implements OnInit {
  public People_arr: any;

  constructor(private _people: PeopleService) {}

  ngOnInit(): void {
    this.getAllPeople();
  }

  getAllPeople() {
    this._people.list_popular_people().subscribe((response) => {
      console.log(response);
      this.People_arr = response.results;
    });
  }
}
