import { Component, Input } from '@angular/core';

export interface Movie {
  title?: string;
  original_title?: string;
  poster_path?: string;
  release_date?: string;
  vote_average?: string;
}

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
}
