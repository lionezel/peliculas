import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { InicioComponent } from './inicio/inicio.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { CarouselModule } from 'src/app/shared/carousel/carousel.module';

@NgModule({
  declarations: [InicioComponent],
  imports: [CommonModule, SharedModule, CarouselModule, FormsModule],
  exports: [InicioComponent],
})
export class HomeModule {}
