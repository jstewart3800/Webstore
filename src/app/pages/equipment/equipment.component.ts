import { Component, OnInit } from '@angular/core';
import { ProductInterface } from 'src/app/interfaces/product-interface';
import { ProductServiceService } from 'src/app/services/product-service.service';

@Component({
  selector: 'app-equipment',
  templateUrl: './equipment.component.html',
  styleUrls: ['./equipment.component.scss']
})
export class EquipmentComponent implements OnInit {
  productList: ProductInterface[]; //Change to equipmentList
  constructor(private pService: ProductServiceService) { }

  ngOnInit() {
    this.productList = this.pService.getProducts();
  }

}
