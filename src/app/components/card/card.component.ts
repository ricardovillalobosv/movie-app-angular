import { Component, Input } from '@angular/core';
import { Movie } from 'src/app/commons/movie';

@Component({
  selector: 'card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent {
  @Input() movie: Movie = {};

  get img() {
    return `https://image.tmdb.org/t/p/w200/${this.movie.poster_path}`;
  }

  get year() {
    return (`${this.movie?.release_date}` || '').slice(0, 4);
  }
}
