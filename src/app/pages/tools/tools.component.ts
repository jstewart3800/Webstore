import { Component, OnInit } from '@angular/core';
import { ProductInterface } from 'src/app/interfaces/product-interface';
import { ProductServiceService } from 'src/app/services/product-service.service';

@Component({
  selector: 'app-tools',
  templateUrl: './tools.component.html',
  styleUrls: ['./tools.component.scss']
})
export class ToolsComponent implements OnInit {
  toolsList: ProductInterface[];
  constructor(private pService: ProductServiceService) { }

  ngOnInit() {
    this.toolsList = this.pService.getTools();
  }
}
