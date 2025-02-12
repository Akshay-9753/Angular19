import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {
  isdance =false;
  isgood=true;
  isModal=false;
  fun(){
    if (this.isdance){
      this.isdance=false
    }
    else{
      this.isdance=true
    }
  }
  showModal() {
    this.isModal=true;
  }
  stopModal() {
     this.isModal =false;
  }
 


}
