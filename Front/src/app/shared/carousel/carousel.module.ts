import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { PeopleCarouselComponent } from './people-carousel/people-carousel.component';
import { CarouselComponent } from './movie-corousel/carousel.component';
import { NgPrimeModule } from 'src/app/ng-prime/ng-prime.module';
import { PipeModule } from 'src/app/pipe/pipe.module';

@NgModule({
  declarations: [PeopleCarouselComponent, CarouselComponent],
  imports: [CommonModule, NgPrimeModule, PipeModule, RouterModule],
  exports: [PeopleCarouselComponent, CarouselComponent],
})
export class CarouselModule {}
