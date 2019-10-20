import { Component, Input, OnInit } from '@angular/core';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-similar-movies',
  templateUrl: './similar-movies.component.html',
  styleUrls: ['./similar-movies.component.css']
})
export class SimilarMoviesComponent implements OnInit {
  public movies; 
  @Input()genre;
  constructor(private movieService: MovieService) { }

  getSimilar() {

    // get movies of same genre
    console.log(`this movie ${this.genre}`);
    this.movieService.getMovieList(this.genre).subscribe(
      data => {
        this.movies = data;
        
      },
      err => console.log(err),
      () => console.log(`similar movies ${this.movies}`)
    );
  }

  ngOnInit() {

    this.getSimilar();

    console.log(`similar_id ${this.genre}`);
  }

}
