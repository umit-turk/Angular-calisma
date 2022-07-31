import { ToastrService } from 'ngx-toastr';
import { Todo } from './../../models/todo';
import { CartService } from './../../services/cart.service';
import { CartItem } from './../../models/cartItem';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart-summary',
  templateUrl: './cart-summary.component.html',
  styleUrls: ['./cart-summary.component.css'],
})
export class CartSummaryComponent implements OnInit {
  cartItems: CartItem[] = [];

  constructor(
    private cartService: CartService,
    private toastrService: ToastrService
  ) {}

  ngOnInit(): void {
    this.getCart();
  }

  getCart() {
    this.cartItems = this.cartService.list();
  }

  removeFromCart(todo: Todo) {
    this.cartService.removeFromCart(todo);
    this.toastrService.error(todo.title + 'sepetten silindi')
  }
}
