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
    this.getMovie();
    this.getImages();
  }

  getPopularMovies() {
    console.log('movies');
    this.movieService.getPopularMovies().subscribe({
      next: ({ results }) => {
        console.log('app res', results);
      },
      error: () => {},
      complete: () => {
        console.log('loading false');
      },
    });
  }

  getMovie() {
    this.movieService.getMovie('640146').subscribe({
      next: (res: any) => {
        console.log('app res__', res);
        const img = `https://image.tmdb.org/t/p/w500/${res?.backdrop_path}`
        const img2 = `https://image.tmdb.org/t/p/w500/${res?.belongs_to_collection.poster_path}`
        console.log(img);
        console.log(img2);
      },
      error: () => {},
      complete: () => {
        console.log('loading false');
      },
    });
  }

  getImages() {
    this.movieService.getMovieImage('640146').subscribe({
      next: (res) => {
        console.log('app res *', res);
      },
      error: () => {},
      complete: () => {
        console.log('loading false');
      },
    });
  }
}
