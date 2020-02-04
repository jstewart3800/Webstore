import { Component, OnInit, Input } from '@angular/core';
import { ProductServiceService } from 'src/app/services/product-service.service';
import { ProductInterface } from 'src/app/interfaces/product-interface';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-display-card',
  templateUrl: './display-card.component.html',
  styleUrls: ['./display-card.component.scss']
})
export class DisplayCardComponent implements OnInit {
  productList: ProductInterface[];

  @Input() item: object;

  constructor(private pService: ProductServiceService, private cService: CartService) { }

  ngOnInit() {
  }

  displayAddToCart(item) {
    this.cService.addToCart(item);
  }

}
