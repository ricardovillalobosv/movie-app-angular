import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss'],
})
export class MovieComponent implements OnInit {
  id: string = '';

  constructor(
    private route: ActivatedRoute,
    private movieService: MovieService
  ) {
    this.route.queryParams.subscribe(({ id }) => (this.id = id));
  }

  ngOnInit(): void {
    this.getMovie();
  }

  getMovie() {
    this.movieService.getMovie(this.id).subscribe({
      next: (res: any) => {
        console.log('app res__', res);
        // const img = `https://image.tmdb.org/t/p/w500/${res?.backdrop_path}`;
        // const img2 = `https://image.tmdb.org/t/p/w500/${res?.belongs_to_collection.poster_path}`;
        // console.log(img);
        // console.log(img2);
      },
      error: () => {},
      complete: () => {},
    });
  }
}
