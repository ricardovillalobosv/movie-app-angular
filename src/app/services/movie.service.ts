import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';

export interface resultHttp {
  results: [];
  page: number;
  total_pages: number;
}

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  // https://api.themoviedb.org/3/movie/popular?api_key=<<api_key>>&language=en-US&page=1
  private API_KEY = '2cedd88de8d72081c5c3ed2cd1088391';
  private BASE_URL = 'https://api.themoviedb.org/3/movie';

  constructor(private httpClient: HttpClient) {}

  getPopularMovies(): Observable<resultHttp> {
    const URL = `${this.BASE_URL}/popular?api_key=${this.API_KEY}&language=en-US&page=1`;
    return this.httpClient.get<resultHttp>(URL).pipe(
      map((res) => {
        return res;
      })
    );
  }
}
