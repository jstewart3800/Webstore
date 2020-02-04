import { Component, OnInit } from '@angular/core';
import { ProductServiceService } from 'src/app/services/product-service.service';
import { ProductInterface } from 'src/app/interfaces/product-interface';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-weapons',
  templateUrl: './weapons.component.html',
  styleUrls: ['./weapons.component.scss']
})
export class WeaponsComponent implements OnInit {
  weaponsList: ProductInterface[];
  constructor(private pService: ProductServiceService, private cService: CartService) { }

  ngOnInit() {
    this.weaponsList = this.pService.getWeapons();
  }
}
