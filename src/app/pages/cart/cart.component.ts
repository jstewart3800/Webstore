import { Component, OnInit } from '@angular/core';
import { ProductServiceService } from 'src/app/services/product-service.service';
import { ProductInterface } from 'src/app/interfaces/product-interface';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  cartList: ProductInterface[];
  cartTotal = 0;
  constructor(private pService: ProductServiceService, private cService: CartService) { }

  ngOnInit() {
    this.cService.$cartItems.subscribe(items => {
      this.cartList = items;
    })
  }

  itemPlus(item: ProductInterface) {
    item.qty++;
    this.cartTotal += item.price;
  }

  itemMinus(item, index) {
    if (item.qty > 1) {
      item.qty--;
    } else {
      this.removeItem(index);
    }
  }

  removeItem(index) {
    this.cartList.splice(index, 1);
  }
  
}
