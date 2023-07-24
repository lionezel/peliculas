import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './components/inicio/inicio.component';
import { MoviesListComponent } from './components/movies/movies-list/movies-list.component';
import { MovieDetailComponent } from './components/movies/movie-detail/movie-detail.component';
import { SeriesListComponent } from './components/series/series-list/series-list.component';

const routes: Routes = [
  { path: '', component: InicioComponent},
  { path: 'movies/popular', component: MoviesListComponent},
  { path: 'movies/:id', component: MovieDetailComponent},

  { path: 'series/popular', component: SeriesListComponent},
  { path: 'series/airing_today', component: SeriesListComponent},
  { path: 'series/on_the_air', component: SeriesListComponent},
  { path: 'series/top_rated', component: SeriesListComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
