import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './page/home/inicio/inicio.component';
import { MovieDetailComponent } from './shared/movie-detail/movie-detail.component';
import { PeopleListComponent } from './components/people/people-list/people-list.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { SearchPageComponent } from './page/search-page/search-page.component';
import { PopularPageComponent } from './page/movie/popular-page/popular-page.component';
import { NowPlayingPageComponent } from './page/movie/now-playing-page/now-playing-page.component';
import { UpcomingPageComponent } from './page/movie/upcoming-page/upcoming-page.component';
import { TopRatedPageComponent } from './page/movie/top-rated-page/top-rated-page.component';
import { PopularSeriePageComponent } from './page/serie/popular-serie-page/popular-serie-page.component';
import { AiringTodayPageComponent } from './page/serie/airing-today-page/airing-today-page.component';

const routes: Routes = [
  { path: '', component: InicioComponent },

  { path: 'search', component: SearchPageComponent },

  { path: 'login', component: LoginComponent, pathMatch: 'full' },
  { path: 'register', component: RegisterComponent, pathMatch: 'full' },

  { path: 'movies/popular', component: PopularPageComponent },
  { path: 'movies/now_playing', component: NowPlayingPageComponent },
  { path: 'movies/upcoming', component: UpcomingPageComponent },
  { path: 'movies/top_rated', component: TopRatedPageComponent },
  { path: 'movies/:id', component: MovieDetailComponent },

  { path: 'series/popular', component: PopularSeriePageComponent },
  { path: 'series/airing_today', component: AiringTodayPageComponent },
  { path: 'series/on_the_air', component: PopularPageComponent },
  { path: 'series/top_rated', component: PopularPageComponent },

  { path: 'people/popular', component: PeopleListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
