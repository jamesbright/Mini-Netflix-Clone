import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from '../movie.service';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { NgZone } from '@angular/core';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {
  public movie;
  public genre;
  constructor( 
    public zone: NgZone,private route: ActivatedRoute, private router: Router, 
    private movieService: MovieService,
    private location: Location) { }

//get a single movie
  getMovie(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.movieService.getMovie(id).subscribe(
      data => {
        this.movie = data; console.log(data)
      
      },
      err => console.log(err),
      () => {
        this.movieService.getMovieList(this.movie.genre[0].id).subscribe
        (
          data => {
            this.genre = data;
          },
          err => console.log(err),
          () => {
            console.log(`genres gotten ${this.genre}`);
          }
        )
      }
    );

    //this.zone.run(() => { this.router.navigate(['/detail/:id']); });
  }


  goBack(): void {
    this.location.back();
  }

  ngOnInit() {
    this.getMovie();
  }

}
