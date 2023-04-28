import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutes } from './app-routes.routes';
import { MoviesComponent } from './pages/movies/movies.component';
import { MovieComponent } from './pages/movie/movie.component';

const appRoutes = AppRoutes.ROUTES;

const routes: Routes = [
  {
    path: appRoutes.Movies.path,
    component: MoviesComponent,
  },
  {
    path: appRoutes.Movie.path,
    component: MovieComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
