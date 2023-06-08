import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AppRoutes } from 'src/app/app-routes.routes';
import { Cast } from 'src/app/commons/cats';
import { Genre } from 'src/app/commons/genre';
import { Movie } from 'src/app/commons/movie';
import { Recommendations } from 'src/app/commons/recommendations';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss'],
})
export class MovieComponent implements OnInit {
  id: string = '';
  routes = AppRoutes.ROUTES;

  movie: Movie = {};
  genders: Genre[] = [];
  mainCast: Cast[] = [];
  recommendations: Movie[] = [];
  releaseCountry: string = '';
  backgroundImg: string = '';

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private movieService: MovieService
  ) {
    this.route.queryParams.subscribe(({ id }) => {
      this.id = id;
      this.getInformation();
    });
  }

  ngOnInit(): void {
    this.getInformation();
  }

  getRecommendations() {
    this.movieService.getRecommendations(this.id).subscribe({
      next: ({ results }) => {
        this.recommendations = results;
      },
      error: () => {},
      complete: () => {},
    });
  }

  getMovie() {
    this.movieService.getMovie(this.id).subscribe({
      next: (movie: Movie) => {
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

  getInformation() {
    this.getMovie();
    this.getCredits();
    this.getRecommendations();
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

  goToMovie(id: string) {
    this.router.navigate([this.routes.Movie.path], { queryParams: { id } });
  }
}
