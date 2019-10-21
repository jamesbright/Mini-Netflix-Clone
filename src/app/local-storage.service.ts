import { Inject, Injectable } from '@angular/core';
import { LOCAL_STORAGE, StorageService } from 'ngx-webstorage-service';

@Injectable()
export class LocalStorageService {
  STORAGE_KEY = 'movie_id';
  favList = [];
  constructor(@Inject(LOCAL_STORAGE) private storage: StorageService) {

  }

  storeOnLocalStorage(movieId: number): void {

    //get items from array
    this.favList = this.storage.get(this.STORAGE_KEY) || []
    // push new movie to array
    this.favList.push(movieId);
    // insert updated array to local storage
    this.storage.set(this.STORAGE_KEY, this.favList);
  }

  getFromLocalStorage() {
    // get array of movies from local storage
    return this.storage.get(this.STORAGE_KEY) || [];
  }

  //remove movie from storage
  removeFromLocalStorage(value) {
    this.favList = this.storage.get(this.STORAGE_KEY) || []
    for (let i = 0; i < this.favList.length; i++) {
      if (this.favList[i] === value) {
        this.favList.splice(i, 1);
      }
    }
    this.storage.set(this.STORAGE_KEY, this.favList);
  }


  //clear storage
  clearFavourites() {
    this.storage.remove(this.STORAGE_KEY);
    this.favList = [];
  }

}
