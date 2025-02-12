import { Component } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-checkout',
  standalone: false,
  templateUrl: './checkout.component.html',
  styleUrl: './checkout.component.css'
})
export class CheckoutComponent {
  constructor(public cartService: CartService) {}

  getTotal(): number {
    return this.cartService.getCart().reduce((sum, item) => sum + item.price, 0);
  }
}
