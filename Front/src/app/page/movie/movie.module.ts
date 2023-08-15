import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { NowPlayingPageComponent } from './now-playing-page/now-playing-page.component';
import { PopularPageComponent } from './popular-page/popular-page.component';
import { TopRatedPageComponent } from './top-rated-page/top-rated-page.component';
import { UpcomingPageComponent } from './upcoming-page/upcoming-page.component';

import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { PipeModule } from 'src/app/pipe/pipe.module';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [
    NowPlayingPageComponent,
    PopularPageComponent,
    TopRatedPageComponent,
    UpcomingPageComponent,
  ],
  imports: [CommonModule, FormsModule, RouterModule, PipeModule, SharedModule],
  exports: [
    NowPlayingPageComponent,
    PopularPageComponent,
    TopRatedPageComponent,
    UpcomingPageComponent,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class MovieModule {}
