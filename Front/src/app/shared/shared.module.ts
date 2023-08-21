import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { CircularProgressComponent } from './circular-progress/circular-progress.component';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';
import { NavComponent } from './nav/nav.component';
import { SerieDetailComponent } from './serie-detail/serie-detail.component';
import { CarouselModule } from './carousel/carousel.module';
import { PipeModule } from '../pipe/pipe.module';
import { NgPrimeModule } from '../ng-prime/ng-prime.module';

@NgModule({
  declarations: [
    CircularProgressComponent,
    MovieDetailComponent,
    NavComponent,
    SerieDetailComponent,
  ],
  imports: [CommonModule, CarouselModule, PipeModule, RouterModule, NgPrimeModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: [
    CircularProgressComponent,
    MovieDetailComponent,
    NavComponent,
    SerieDetailComponent,
  ],
})
export class SharedModule {}
