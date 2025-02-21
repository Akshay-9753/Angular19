import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'fakestore';
  products: any = [];
  constructor(public hc: HttpClient) {
    this.hc.get('https://fakestoreapi.com/products').subscribe((data) => {
      this.products = data;
    });
  }
}
