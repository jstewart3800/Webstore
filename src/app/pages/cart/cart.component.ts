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
    });

    this.cService.$cartTotal.subscribe(total => {
      this.cartTotal = total;
    });

  }

  compItemPlus(item: ProductInterface) {
    this.cService.itemPlus(item);
  }

  compItemMinus(item, index) {
    this.cService.itemMinus(item, index);
  }

  compRemoveItem(item,index) {
    this.cService.removeItem(item, index);
  }

  
  
}
