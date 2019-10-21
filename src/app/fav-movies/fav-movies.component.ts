import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from '../local-storage.service'
import { MovieService } from '../movie.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-fav-movies',
  templateUrl: './fav-movies.component.html',
  styleUrls: ['./fav-movies.component.css']
})
export class FavMoviesComponent implements OnInit {
  favourites = [];
  movies = [];
  constructor(
    private router: Router,
    private localStorageService: LocalStorageService,
    private movieService: MovieService) { }


  //compile list of movies from local storage
  getMyList() {
    this.favourites = this.localStorageService.getFromLocalStorage();

    //iterate through the array and push each value at index is to movies[]
    this.favourites.forEach(id => {
      this.movieService.getMovie(id).subscribe(
        data => {
          this.movies.push(data);
        },
        err => console.log(err),
        () => console.log(this.movies)
      );
    });
  }

  removeFromFavourites(id: number) {
    this.localStorageService.removeFromLocalStorage(id);
    location.reload();
  }

  clearFavourites() {
    this.localStorageService.clearFavourites();
  }
  ngOnInit() {
    this.getMyList();
  }

}
