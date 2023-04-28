import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducer';
import { validCategories } from 'src/app/stores/category.actions';
import * as categoryActions from 'src/app/stores/category.actions';

interface Categories {
  title: string;
  key: validCategories;
}

@Component({
  selector: 'categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss'],
})
export class CategoriesComponent {
  currentCategory: validCategories = 'popular';

  categories: Categories[] = [
    {
      title: 'Popular',
      key: 'popular',
    },
    {
      title: 'En cartelera',
      key: 'now_playing',
    },
    {
      title: 'Más valoradas',
      key: 'top_rated',
    },
  ];

  constructor(private store: Store<AppState>) {
    this.store
      .select('category')
      .subscribe((category) => (this.currentCategory = category));
  }

  selectCategory(category: validCategories) {
    this.store.dispatch(categoryActions.selectCategory({ category }));
  }
}
