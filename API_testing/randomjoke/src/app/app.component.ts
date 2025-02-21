import { Component } from '@angular/core';
import { ApiService } from './api.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'randomjoke';
  myjoke:any='';
  constructor(public api:ApiService){
    console.log(this.api.joke)
    this.myjoke=this.api.joke;
  }
  fun(){
    this.api.getjoke()
    this.myjoke=this.api.joke;
  }
}
