import { createReducer, on } from '@ngrx/store';
import { getMovies } from './movie.actions';

// export interface State {
//   key: String;
// }

export const initialState: any = [];

export const movieReducer = createReducer(
  initialState,

  on(getMovies, (state, { movies }) => ({ ...state, movies }))
);
