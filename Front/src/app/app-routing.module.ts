import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './page/home/inicio/inicio.component';
import { MovieDetailComponent } from './shared/movie-detail/movie-detail.component';

import { SearchPageComponent } from './page/search-page/search-page.component';
import { PopularPageComponent } from './page/movie/popular-page/popular-page.component';
import { NowPlayingPageComponent } from './page/movie/now-playing-page/now-playing-page.component';
import { UpcomingPageComponent } from './page/movie/upcoming-page/upcoming-page.component';
import { TopRatedPageComponent } from './page/movie/top-rated-page/top-rated-page.component';
import { PopularSeriePageComponent } from './page/serie/popular-serie-page/popular-serie-page.component';
import { AiringTodayPageComponent } from './page/serie/airing-today-page/airing-today-page.component';
import { OnTheAirPageComponent } from './page/serie/on-the-air-page/on-the-air-page.component';
import { TopRatedSeriePageComponent } from './page/serie/top-rated-serie-page/top-rated-serie-page.component';
import { SerieDetailComponent } from './shared/serie-detail/serie-detail.component';
import { PeopleListComponent } from './page/people/people-list/people-list.component';
import { LoginComponent } from './page/acount-user/login/login.component';
import { RegisterComponent } from './page/acount-user/register/register.component';
import { EmailVerificationComponent } from './page/acount-user/email-verification/email-verification.component';
import { ForgotPasswordComponent } from './page/acount-user/forgot-password/forgot-password.component';

const routes: Routes = [
  { path: '', component: InicioComponent },

  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'verification', component: EmailVerificationComponent },
  { path: 'forgot-password', component: ForgotPasswordComponent },

  { path: 'search', component: SearchPageComponent },

  { path: 'movies/popular', component: PopularPageComponent },
  { path: 'movies/now_playing', component: NowPlayingPageComponent },
  { path: 'movies/upcoming', component: UpcomingPageComponent },
  { path: 'movies/top_rated', component: TopRatedPageComponent },
  { path: 'movies/:id', component: MovieDetailComponent },

  { path: 'series/popular', component: PopularSeriePageComponent },
  { path: 'series/airing_today', component: AiringTodayPageComponent },
  { path: 'series/on_the_air', component: OnTheAirPageComponent },
  { path: 'series/top_rated', component: TopRatedSeriePageComponent },
  { path: 'series/:id', component: SerieDetailComponent },

  { path: 'people', component: PeopleListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
