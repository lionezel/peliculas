import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccordionModule } from 'primeng/accordion';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { DropdownModule } from 'primeng/dropdown';
import { CarouselModule } from 'primeng/carousel';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AccordionModule,
    ProgressSpinnerModule,
    DropdownModule,
    CarouselModule,
  ],
  exports: [
    CommonModule,
    AccordionModule,
    ProgressSpinnerModule,
    DropdownModule,
    CarouselModule,
  ],
})
export class NgPrimeModule {}
