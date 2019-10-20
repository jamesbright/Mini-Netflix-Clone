import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { RouterModule, Routes } from '@angular/router';
import { FavMoviesComponent } from './fav-movies/fav-movies.component';
import { HomeComponent } from './home/home.component';
import { SimilarMoviesComponent } from './similar-movies/similar-movies.component';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    MovieDetailsComponent,
    FavMoviesComponent,
    HomeComponent,
    SimilarMoviesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
   AppRoutingModule,
    HttpClientModule
  ],
  providers: [HttpClientModule],
  bootstrap: [AppComponent]
})

export class AppModule { }
