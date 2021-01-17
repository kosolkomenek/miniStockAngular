import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ProductService } from '../api/product.service';

import { MatDialog } from '@angular/material/dialog';
import { DialogProductComponent } from '../dialog-product/dialog-product.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  encapsulation: ViewEncapsulation.None
})

export class DashboardComponent implements OnInit {

  products={};

  constructor(public productService: ProductService ,public dialog:MatDialog) {}

  openDialog(){
    this.dialog.open(DialogProductComponent,{
      width: '950px'
    })
  }

  ngOnInit(): void {
  	this.productService.getProduct().subscribe((data: {}) => {
      this.products = data;
  	})
  }

}
