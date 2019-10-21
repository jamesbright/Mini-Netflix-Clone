import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movie.service';
import { Subject } from 'rxjs/Subject';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [MovieService]
})
export class HomeComponent implements OnInit {
  searchTerm$ = new Subject<string>();
  movies;
  routTo: string;
  constructor(
    private movieService: MovieService, public route: ActivatedRoute
  ) {


    this.movieService.search(this.searchTerm$)
      .subscribe(data => {
        this.movies = data;
      },
        err => console.log(err),
        () => console.log(this.movies)


      );
  }

  getMovies() {
    this.movieService.getMovies().subscribe(
      data => {
        this.movies = data;
        console.log(data);
      },
      err => console.log(err),
      () => console.log(`success`)
    );


  }
  getTvShows() {
    this.movieService.getTvShows().subscribe(
      data => {
        this.movies = data;
        console.log(data);
      },
      err => console.log(err),
      () => console.log(`success`)
    );
  }


  getPopular() {
    this.movieService.getPopular().subscribe(
      data => {
        this.movies = data;
        console.log(data);
      },
      err => console.log(err),
      () => console.log(`success`)
    );
  }

  getUpcoming() {
    this.movieService.getUpcoming().subscribe(
      data => {
        this.movies = data;
        console.log(data);
      },
      err => console.log(err),
      () => console.log(`success`)
    );
  }

  ngOnInit() {

    this.getMovies();
    // get routes
    this.route.url.subscribe(params => {
      this.routTo = params[0].path;

      switch (this.routTo) {
        case 'shows':
          //get tv shows
          this.getTvShows();
          break;
        case 'upcoming':
          //upcoming movies
          this.getUpcoming();
          break;
        case 'popular':
          //get popular movies
          this.getPopular();
          break;

        default:
          //rout to home

          break;
      }

    })

  }

}
