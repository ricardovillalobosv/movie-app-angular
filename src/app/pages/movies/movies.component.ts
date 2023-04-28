import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppRoutes } from 'src/app/app-routes.routes';
import { AppState } from 'src/app/app.reducer';
import { Movie } from 'src/app/components/card/card.component';
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
        this.movies = results;
      },
      error: (err) => console.log(err),
      complete: () => (this.loading = false),
    });
  }

  goToMovie(id: string) {
    this.router.navigate([this.routes.Movie.path], { queryParams: { id } });
  }
}
