import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FilterPipe } from './filter.pipe';
import { MileSeparatorPipe } from './mile-separator.pipe';
import { PosterPipe } from './poster.pipe';
import { PageModule } from '../page/page.module';

@NgModule({
  declarations: [FilterPipe, MileSeparatorPipe, PosterPipe],
  imports: [CommonModule],
  exports: [FilterPipe, MileSeparatorPipe, PosterPipe],
})
export class PipeModule {}
