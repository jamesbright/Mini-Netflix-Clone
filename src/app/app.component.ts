import { Component } from '@angular/core';
import { MovieService } from './movie.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Movies';
 
  getKeys(obj) {
    return Object.keys(obj)
  }

  ngOnInit() {
  

  };
}
