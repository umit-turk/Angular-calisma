import { CartItem } from './../models/cartItem';
import { Todo } from './../models/todo';
import { Injectable } from '@angular/core';
import { CartItems } from '../models/cartItems';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor() { }

  addToCart(todo:Todo){
    let item = CartItems.find(c => c.todo.id === todo.id);
    if(item){
      item.quantity += 1;
    }else{
      let cartItem = new CartItem();
      cartItem.todo = todo;
      cartItem.quantity = 1;
      CartItems.push(cartItem);
    }
  }

  removeFromCart(todo:Todo){
    let item :any = CartItems.find(c => c.todo.id === todo.id)
    CartItems.splice(CartItems.indexOf(item), 1);
  }

  list():CartItem[]{
    return CartItems;
  }

}
