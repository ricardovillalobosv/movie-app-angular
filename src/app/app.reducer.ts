import { ActionReducerMap } from '@ngrx/store';
import { validCategories } from './stores/category.actions';
import { categoryReducer } from './stores/category.reducer';
import { movieReducer } from './stores/movie.reducer';

export interface AppState {
  category: validCategories;
  movies: [];
}

export const appReducers: ActionReducerMap<AppState> = {
  category: categoryReducer,
  movies: movieReducer,
};
