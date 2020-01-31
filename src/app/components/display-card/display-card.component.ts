import { Component, OnInit, Input } from '@angular/core';
import { ProductServiceService } from 'src/app/services/product-service.service';
import { ProductInterface } from 'src/app/interfaces/product-interface';

@Component({
  selector: 'app-display-card',
  templateUrl: './display-card.component.html',
  styleUrls: ['./display-card.component.scss']
})
export class DisplayCardComponent implements OnInit {
  productList: ProductInterface[];

  @Input() item: object;

  constructor(private pService: ProductServiceService) { }

  ngOnInit() {
    // this.productList = this.pService.getProducts();
  }

}
