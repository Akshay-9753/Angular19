import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  products = [
    { id: 1, name: 'Laptop', price: 1000, image: 'assets/laptop.jpg' },
    { id: 2, name: 'Phone', price: 500, image: 'assets/phone.jpg' },
    { id: 3, name: 'Headphones', price: 200, image: 'assets/headphones.jpg' }
  ];

  getProducts() {
    return this.products;
  }

  getProductById(id: number) {
    return this.products.find(p => p.id === id);
  }
}
