import { createAction, props } from '@ngrx/store';

export const getMovies = createAction(
  '[Movies Component] Get Movies',
  props<{ movies: any }>()
);
