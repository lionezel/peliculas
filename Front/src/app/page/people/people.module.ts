import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PeopleListComponent } from './people-list/people-list.component';
import { PeopleCardComponent } from './people-card/people-card.component';



@NgModule({
  declarations: [
    PeopleListComponent,
    PeopleCardComponent
  ],
  imports: [
    CommonModule
  ]
})
export class PeopleModule { }
