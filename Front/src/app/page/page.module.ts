import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MovieModule } from './movie/movie.module';
import { HomeModule } from './home/home.module';

import { SearchPageComponent } from './search-page/search-page.component';
import { SerieModule } from './serie/serie.module';
import { SharedModule } from '../shared/shared.module';

import { PipeModule } from '../pipe/pipe.module';

@NgModule({
  declarations: [SearchPageComponent],
  imports: [
    CommonModule,
    HomeModule,
    MovieModule,
    SerieModule,
    SharedModule,
    PipeModule,
  ],
  exports: [HomeModule, MovieModule, SerieModule, SearchPageComponent],
})
export class PageModule {}
