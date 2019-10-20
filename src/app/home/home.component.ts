import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movie.service';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  movies;
  constructor(private movieService: MovieService) { }

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

  ngOnInit() {
   
    this.getMovies();
  }

}
