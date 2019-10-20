import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  API_KEY = '362f309ced9506f3b5c1f401d7bb73fb';

  api = `https://api.themoviedb.org/3/discover/movie?page=1&include_video=false&include_adult=false&sort_by=popularity.desc&language=en-US&api_key=${this.API_KEY}`;
  constructor(private http:HttpClient) { }

  getMovies() {
    return this.http.get(this.api);
  }

  getMovie(id: number) {
    console.log(`getMovie ${id} called`)
    const api = `https://api.themoviedb.org/3/movie/${id}?language=en-US&api_key=${this.API_KEY}`;
    return this.http.get(api);
  }
  getMovieList(list_id: number) {
    const api = `https://api.themoviedb.org/3/movie?with_genre=${list_id}&api_key=${this.API_KEY}&language=en-US`;
    return this.http.get(api);
  }
  
}
