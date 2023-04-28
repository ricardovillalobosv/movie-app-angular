import { createAction, props } from '@ngrx/store';

export type validCategories =
  | 'popular'
  | 'now_playing'
  | 'top_rated';

export const selectCategory = createAction(
  '[Categories Component] Select Category',
  props<{ category: validCategories }>()
);
