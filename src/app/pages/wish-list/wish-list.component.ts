import { Component, OnInit } from '@angular/core';
import { ProductInterface } from 'src/app/interfaces/product-interface';
import { WishListService } from 'src/app/services/wish-list.service';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-wish-list',
  templateUrl: './wish-list.component.html',
  styleUrls: ['./wish-list.component.scss']
})
export class WishListComponent implements OnInit {
  wishList: ProductInterface[] = [];
  constructor(private wService: WishListService, private cService: CartService) { }

  ngOnInit() {
    this.wService.$wishList.subscribe(list => {
      this.wishList = list;
    })
  }

  wishAddToCart(item, index) {
    this.cService.addToCart(item);
    this.wService.removeFromWish(index);
  }

  compRemoveFromWish(index) {
    this.wService.removeFromWish(index);
  }

}
