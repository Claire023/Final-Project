import { Component, OnInit, Input } from '@angular/core';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-admin-product',
  templateUrl: './admin-product.component.html',
  styleUrls: ['./admin-product.component.css']
})
export class AdminProductComponent implements OnInit {

  // @Input() product: Product;

  constructor() { }

  ngOnInit() {
  }

  // update() {
  //   console.log("update du produit" + this.product.name + "...");
  // }

  // delete() {
  //   console.log("suppression du produit" + this.product.name + "...");
  // }

}
