import { createReducer, on } from '@ngrx/store';
import { selectCategory, validCategories } from './category.actions';

export interface State {
  category: validCategories;
}

export const initialState: validCategories = 'popular';

export const categoryReducer = createReducer<validCategories>(
  initialState,
  on(selectCategory, (state, { category }) => category)
);
