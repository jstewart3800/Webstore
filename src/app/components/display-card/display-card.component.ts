import { Component, OnInit, Input } from '@angular/core';
import { ProductServiceService } from 'src/app/services/product-service.service';
import { ProductInterface } from 'src/app/interfaces/product-interface';
import { CartService } from 'src/app/services/cart.service';
import { WishListService } from 'src/app/services/wish-list.service';

@Component({
  selector: 'app-display-card',
  templateUrl: './display-card.component.html',
  styleUrls: ['./display-card.component.scss']
})
export class DisplayCardComponent implements OnInit {
  productList: ProductInterface[];

  @Input() item: ProductInterface;

  constructor(private pService: ProductServiceService, private cService: CartService, private wService: WishListService) { }

  ngOnInit() {
  }

  displayAddToCart(item) {
    this.cService.addToCart(item);
  }

  displayAddToWish(item) {
    this.wService.addToWish(item);
  }

}
