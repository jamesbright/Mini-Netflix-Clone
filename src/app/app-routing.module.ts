import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';

import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { HomeComponent } from './home/home.component';
import { FavMoviesComponent } from './fav-movies/fav-movies.component';
const routes: Routes = [
  { path: 'detail/:id', component: MovieDetailsComponent },
  { path: '', component: HomeComponent },
  { path: 'favourites', component: FavMoviesComponent },
  { path: 'upcoming', component: HomeComponent},
  { path: 'popular', component: HomeComponent },
  { path: 'shows', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
