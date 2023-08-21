import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccordionModule } from 'primeng/accordion';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { DropdownModule } from 'primeng/dropdown';
import { CarouselModule } from 'primeng/carousel';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { AvatarModule } from 'primeng/avatar';
import { AvatarGroupModule } from 'primeng/avatargroup';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AccordionModule,
    ProgressSpinnerModule,
    DropdownModule,
    CarouselModule,
    InputTextModule,
    ButtonModule,
    AvatarModule,
    AvatarGroupModule
  ],
  exports: [
    CommonModule,
    AccordionModule,
    ProgressSpinnerModule,
    DropdownModule,
    CarouselModule,
    InputTextModule,
    ButtonModule,
    AvatarModule,
    AvatarGroupModule
  ],
})
export class NgPrimeModule {}
