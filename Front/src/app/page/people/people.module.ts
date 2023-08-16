import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PeopleListComponent } from './people-list/people-list.component';
import { PeopleCardComponent } from './people-card/people-card.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { PipeModule } from 'src/app/pipe/pipe.module';



@NgModule({
  declarations: [
    PeopleListComponent,
    PeopleCardComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    PipeModule
  ]
})
export class PeopleModule { }
