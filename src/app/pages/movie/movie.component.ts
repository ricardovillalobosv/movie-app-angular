import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Cast } from 'src/app/commons/cats';
import { Genre } from 'src/app/commons/genre';
import { Movie } from 'src/app/commons/movie';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss'],
})
export class MovieComponent implements OnInit {
  id: string = '';

  movie: Movie = {};
  genders: Genre[] = [];
  mainCast: Cast[] = [];
  releaseCountry: string = '';
  backgroundImg: string = '';

  constructor(
    private route: ActivatedRoute,
    private movieService: MovieService
  ) {
    this.route.queryParams.subscribe(({ id }) => (this.id = id));
  }

  ngOnInit(): void {
    this.getMovie();
    this.getCredits();
  }

  getMovie() {
    this.movieService.getMovie(this.id).subscribe({
      next: (movie: Movie) => {
        console.log('movie__', movie);
        this.movie = movie;
        this.genders = movie?.genres || [];
        this.releaseCountry =
          (this.movie?.production_countries || [])[0].iso_3166_1 || '';
        this.backgroundImg = `https://image.tmdb.org/t/p/w500/${movie?.backdrop_path}`;
      },
      error: () => {},
      complete: () => {},
    });
  }

  getCredits() {
    this.movieService.getCredits(this.id).subscribe({
      next: ({ cast, directing }) => {
        const mainCast: Cast[] = cast.slice(0, 9);
        this.mainCast = mainCast.map((cast) => ({
          ...cast,
          profile_path: `https://image.tmdb.org/t/p/w200/${cast.profile_path}`,
        }));
      },
      error: () => {},
      complete: () => {},
    });
  }

  get poster(): string {
    return `https://image.tmdb.org/t/p/w300/${this.movie.poster_path}`;
  }

  get release(): string {
    const year = (`${this.movie?.release_date}` || '').slice(0, 4);
    return `${year} (${this.releaseCountry})`;
  }

  get duration(): string {
    const totalMinutes = this.movie?.runtime || 0;
    const hours = Math.floor(totalMinutes / 60);
    const minutes = totalMinutes % 60;
    return `${hours}h ${minutes}m`;
  }
}
