import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';

export interface resultHttpList {
  results: [];
  page: number;
  total_pages: number;
}

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  private API_KEY = '2cedd88de8d72081c5c3ed2cd1088391';
  private BASE_URL = 'https://api.themoviedb.org/3/movie';

  constructor(private httpClient: HttpClient) {}

  getMovies(category = 'popular'): Observable<resultHttpList> {
    const URL = `${this.BASE_URL}/${category}?api_key=${this.API_KEY}&language=es-ES&page=1`;
    return this.httpClient.get<resultHttpList>(URL).pipe(
      map((res) => {
        return res;
      })
    );
  }

  getPopularMovies(): Observable<resultHttpList> {
    const URL = `${this.BASE_URL}/popular?api_key=${this.API_KEY}&language=es-ES&page=1`;
    return this.httpClient.get<resultHttpList>(URL).pipe(
      map((res) => {
        return res;
      })
    );
  }

  getMovie(movieId: string) {
    const URL = `${this.BASE_URL}/${movieId}?api_key=${this.API_KEY}&language=es-ES`;
    return this.httpClient.get(URL).pipe(
      map((res) => {
        return res;
      })
    );
  }
}
