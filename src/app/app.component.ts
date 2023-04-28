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
    this.getImages();
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
