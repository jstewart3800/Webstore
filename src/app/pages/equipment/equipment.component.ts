import { Component, OnInit } from '@angular/core';
import { ProductInterface } from 'src/app/interfaces/product-interface';
import { ProductServiceService } from 'src/app/services/product-service.service';

@Component({
  selector: 'app-equipment',
  templateUrl: './equipment.component.html',
  styleUrls: ['./equipment.component.scss']
})
export class EquipmentComponent implements OnInit {
  equipmentList: ProductInterface[];
  constructor(private pService: ProductServiceService) { }

  ngOnInit() {
    this.equipmentList = this.pService.getEquipment();
  }

}
