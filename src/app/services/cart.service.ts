import { Injectable } from '@angular/core';
import { ProductInterface } from '../interfaces/product-interface';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cartItems: ProductInterface[] = [];
  $cartItems = new BehaviorSubject<ProductInterface[]>(this.cartItems);


  constructor() { }

  addToCart(item: ProductInterface) {
    let cartItem = this.cartItems.find(x => x.id == item.id);
    if(cartItem) {
      cartItem.qty++;
    } else {
      item.qty = 1;
      this.cartItems.push(item);
    }


    this.$cartItems.next(this.cartItems);
  }
}
