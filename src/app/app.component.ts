import { Component } from '@angular/core';
import { MovieService } from './services/movie.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'movie-app-angular';

  constructor(private movieService: MovieService) {
    this.getPopularMovies();
  }

  getPopularMovies() {
    console.log('movies');
    this.movieService.getPopularMovies().subscribe({
      next: ( { results } ) => {
        console.log('app res', results);
      },
      error: () => {},
      complete: () => {
        console.log('loading false');
      },
    });
  }
}
