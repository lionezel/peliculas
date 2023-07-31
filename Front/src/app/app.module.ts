import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClient, HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { MoviesListComponent } from './components/movies/movies-list/movies-list.component';
import { NavComponent } from './components/nav/nav.component';
import { PosterPipe } from './pipe/poster.pipe';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatGridListModule } from '@angular/material/grid-list';
import { MovieDetailComponent } from './components/movies/movie-detail/movie-detail.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatExpansionModule} from '@angular/material/expansion';
import { CarouselModule } from 'primeng/carousel';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AccordionModule } from 'primeng/accordion';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { SeriesListComponent } from './components/series/series-list/series-list.component';
import { DropdownModule } from 'primeng/dropdown';
import { FormsModule } from '@angular/forms';
import { FilterPipe } from './pipe/filter.pipe';
import { PeopleListComponent } from './components/people/people-list/people-list.component';
import { PaginatorModule } from 'primeng/paginator';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    MoviesListComponent,
    NavComponent,
    PosterPipe,
    MovieDetailComponent,
    SeriesListComponent,
    FilterPipe,
    PeopleListComponent,
    RegisterComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    BrowserAnimationsModule,
    MatGridListModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatExpansionModule,
    CarouselModule,
    AccordionModule,
    ProgressSpinnerModule,
    DropdownModule,
    FormsModule  ,
    PaginatorModule

  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
