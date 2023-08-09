import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatExpansionModule } from '@angular/material/expansion';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatGridListModule } from '@angular/material/grid-list';

//COMPONENTS
import { AppComponent } from './app.component';
import { InicioComponent } from './page/home/inicio/inicio.component';
import { NavComponent } from './shared/nav/nav.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { SearchPageComponent } from './page/search-page/search-page.component';
import { PeopleListComponent } from './components/people/people-list/people-list.component';
import { SeriesListComponent } from './components/series/series-list/series-list.component';
import { MovieDetailComponent } from './shared/movie-detail/movie-detail.component';
import { PopularPageComponent } from './page/movie/popular-page/popular-page.component';

//PIPE
import { PosterPipe } from './pipe/poster.pipe';
import { FilterPipe } from './pipe/filter.pipe';

//PRIMENG
import { CarouselModule } from 'primeng/carousel';
import { AccordionModule } from 'primeng/accordion';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { DropdownModule } from 'primeng/dropdown';
import { PaginatorModule } from 'primeng/paginator';
import { NowPlayingPageComponent } from './page/movie/now-playing-page/now-playing-page.component';
import { UpcomingPageComponent } from './page/movie/upcoming-page/upcoming-page.component';
import { TopRatedPageComponent } from './page/movie/top-rated-page/top-rated-page.component';
import { CarouselComponent } from './components/carousel/carousel.component';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    NavComponent,
    PosterPipe,
    MovieDetailComponent,
    SeriesListComponent,
    FilterPipe,
    PeopleListComponent,
    RegisterComponent,
    LoginComponent,
    SearchPageComponent,
    PopularPageComponent,
    NowPlayingPageComponent,
    UpcomingPageComponent,
    TopRatedPageComponent,
    CarouselComponent,
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
    FormsModule,
    PaginatorModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
