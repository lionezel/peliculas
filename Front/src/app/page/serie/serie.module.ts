import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AiringTodayPageComponent } from './airing-today-page/airing-today-page.component';
import { CardSerieComponent } from './card-serie/card-serie.component';
import { OnTheAirPageComponent } from './on-the-air-page/on-the-air-page.component';
import { PopularSeriePageComponent } from './popular-serie-page/popular-serie-page.component';
import { TopRatedSeriePageComponent } from './top-rated-serie-page/top-rated-serie-page.component';

import { PipeModule } from 'src/app/pipe/pipe.module';
import { NgPrimeModule } from 'src/app/ng-prime/ng-prime.module';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    AiringTodayPageComponent,
    CardSerieComponent,
    OnTheAirPageComponent,
    PopularSeriePageComponent,
    TopRatedSeriePageComponent,
  ],
  imports: [CommonModule, FormsModule, RouterModule, PipeModule, NgPrimeModule, SharedModule],
  exports: [
    AiringTodayPageComponent,
    CardSerieComponent,
    OnTheAirPageComponent,
    PopularSeriePageComponent,
    TopRatedSeriePageComponent,
  ],
})
export class SerieModule {}
