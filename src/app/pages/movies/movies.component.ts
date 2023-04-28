import { Component } from '@angular/core';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss'],
})
export class MoviesComponent {
  popularMovies = [];

  constructor(private movieService: MovieService) {
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
}
