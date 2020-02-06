import { Injectable } from '@angular/core';
import { ProductInterface } from '../interfaces/product-interface';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WishListService {
  wishList: ProductInterface[] = [];
  $wishList = new BehaviorSubject<ProductInterface[]>(this.wishList);

  constructor() { }

  addToWish(item: ProductInterface) {
    let wishItem = this.wishList.find(x => x.id == item.id);
    if (wishItem) {} else {
      this.wishList.push(item);
    }
    console.log(this.wishList);
    this.$wishList.next(this.wishList);
  }

  removeFromWish(index) {
    this.wishList.splice(index, 1);

    this.$wishList.next(this.wishList);
  }
}
