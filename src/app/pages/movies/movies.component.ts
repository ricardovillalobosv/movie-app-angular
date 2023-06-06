import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppRoutes } from 'src/app/app-routes.routes';
import { AppState } from 'src/app/app.reducer';
import { Movie } from 'src/app/commons/movie';
import { MovieService } from 'src/app/services/movie.service';
import { validCategories } from 'src/app/stores/category.actions';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss'],
})
export class MoviesComponent {
  category: validCategories = 'popular';
  movies: Movie[] = [];
  routes = AppRoutes.ROUTES;
  loading: boolean = false;

  constructor(
    private movieService: MovieService,
    private router: Router,
    private store: Store<AppState>
  ) {
    this.store.select('category').subscribe((category) => {
      this.category = category;
      this.getMovies();
    });
  }

  getMovies() {
    this.loading = true;
    this.movieService.getMovies(this.category).subscribe({
      next: ({ results }) => {
        this.movies = results.sort((movie1: Movie, movie2: Movie) => {
          const vote1 = movie1?.vote_average || '';
          const vote2 = movie2?.vote_average || '';
          return vote1 < vote2 ? 1 : vote1 > vote2 ? -1 : 0;
        });
      },
      error: (err) => console.log(err),
      complete: () => (this.loading = false),
    });
  }

  goToMovie(id: string) {
    this.router.navigate([this.routes.Movie.path], { queryParams: { id } });
  }
}
