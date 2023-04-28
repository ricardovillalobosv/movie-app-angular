import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AppRoutes } from 'src/app/app-routes.routes';
import { Movie } from 'src/app/components/card/card.component';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss'],
})
export class MoviesComponent {
  popularMovies: Movie[] = [];
  routes = AppRoutes.ROUTES;

  constructor(private movieService: MovieService, private router: Router) {
    this.getPopularMovies();
  }

  getPopularMovies() {
    this.movieService.getPopularMovies().subscribe({
      next: ({ results }) => {
        this.popularMovies = results;
      },
      error: () => {},
      complete: () => {
        console.log('loading false');
      },
    });
  }

  goToMovie(id: string) {
    this.router.navigate([this.routes.Movie.path], { queryParams: { id } });
  }
}
