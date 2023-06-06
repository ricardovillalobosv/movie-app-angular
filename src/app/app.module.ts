import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { MoviesComponent } from './pages/movies/movies.component';
import { MovieComponent } from './pages/movie/movie.component';
import { CardModule } from './components/card/card.module';
import { CategoriesModule } from './components/categories/categories.module';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { appReducers } from './app.reducer';
import { SpinnerModule } from './components/spinner/spinner.module';
import { QualificationModule } from './components/qualification/qualification.module';

@NgModule({
  declarations: [AppComponent, MoviesComponent, MovieComponent,],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot(appReducers),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: !isDevMode, // Restrict extension to log-only mode
      autoPause: true, // Pauses recording actions and state changes when the extension window is not open
    }),
    CardModule,
    CategoriesModule,
    SpinnerModule,
    QualificationModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
