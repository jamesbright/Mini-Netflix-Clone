import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  API_KEY = '362f309ced9506f3b5c1f401d7bb73fb';
  queryUrl: string = '?search=';

  constructor(private http: HttpClient) { }

  getMovies() {
    const api = `https://api.themoviedb.org/3/discover/movie?page=1&include_video=false&include_adult=false&sort_by=popularity.desc&language=en-US&api_key=${this.API_KEY}`;
    return this.http.get(api);
  }

  getMovie(id: number) {
    console.log(`getMovie ${id} called`)
    const api = `https://api.themoviedb.org/3/movie/${id}?language=en-US&api_key=${this.API_KEY}`;
    return this.http.get(api);
  }
  getMovieList(list_id: number) {
    const api = `https://api.themoviedb.org/3/discover/movie?with_genres=${list_id}&api_key=${this.API_KEY}&language=en-US`;
    return this.http.get(api);
  }

  search(terms: Observable<string>) {
    return terms.debounceTime(400)
      .distinctUntilChanged()
      .switchMap(term => this.searchEntries(term));
  }

  searchEntries(term) {
    const api = `https://api.themoviedb.org/3/search/movie?api_key=${this.API_KEY}&query=${term}`;
    return this.http.get(api);
  }

  getTvShows() {
    const api = `https://api.themoviedb.org/3/tv/popular?api_key=${this.API_KEY}&language=en-US&page=1`;
    return this.http.get(api);
  }
  getPopular() {
    const api = `https://api.themoviedb.org/3/movie/top_rated?api_key=${this.API_KEY}&language=en-US&page=1`;
    return this.http.get(api);
  }


  getUpcoming() {
    const api = `https://api.themoviedb.org/3/movie/upcoming?api_key=${this.API_KEY}&language=en-US&page=1`;
    return this.http.get(api);
  }
}

