import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from '../movie.service';
import { Location } from '@angular/common';
import { LocalStorageService } from '../local-storage.service'

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {
  public movie;
  public genre;
  constructor(
    private route: ActivatedRoute,
    private movieService: MovieService,
    private location: Location,
    private localStorageService: LocalStorageService) { }

  //get a single movie
  getMovie(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.movieService.getMovie(id).subscribe(
      data => {
        this.movie = data;
        console.log(data)

      },
      err => console.log(err),
      () => {
        console.log(`genre is ${this.movie.genres[0].id}`);
        this.movieService.getMovieList(this.movie.genres[0].id).subscribe
          (
            data => {
              this.genre = data;

              console.log(this.genre);
            },
            err => console.log(err),
            () => {
              console.log(``);
            }
          )
      }
    );

  }

  addToFavourites(event, movieId) {
    this.localStorageService.storeOnLocalStorage(movieId);
  }
  goBack(): void {
    this.location.back();
  }

  ngOnInit() {
    this.getMovie();
  }

}
