import { Injectable } from '@angular/core';
import { ProductInterface } from '../interfaces/product-interface';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cartItems: ProductInterface[] = [];
  $cartItems = new BehaviorSubject<ProductInterface[]>(this.cartItems);

  cartTotal = 0;
  $cartTotal = new BehaviorSubject<number>(this.cartTotal);



  constructor() { }

  addToCart(item: ProductInterface) {
    let cartItem = this.cartItems.find(x => x.id == item.id);
    if(cartItem) {
      cartItem.qty++;
    } else {
      item.qty = 1;
      this.cartItems.push(item);
    }

    this.cartTotal += item.price;


    this.$cartItems.next(this.cartItems);
    this.$cartTotal.next(this.cartTotal);
  }

  itemPlus(item: ProductInterface) {
    item.qty++;
    this.cartTotal += item.price;

    this.$cartTotal.next(this.cartTotal);
  }

  itemMinus(item, index) {
    if (item.qty > 1) {
      item.qty--;
      this.cartTotal -= item.price;
    } else {
      this.removeItem(item, index);
    }

    this.$cartTotal.next(this.cartTotal);
  }

  removeItem(item, index) {
    this.cartItems.splice(index, 1);
    const totalPrice = item.qty * item.price;
    this.cartTotal -= totalPrice;

    this.$cartItems.next(this.cartItems);
    this.$cartTotal.next(this.cartTotal);
  }
}
