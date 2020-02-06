import { Component, OnInit, Input } from '@angular/core';
import { Product } from 'src/app/models/product';
import { MenuService } from 'src/app/services/menu.service';
import { KeyValue } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-product',
  templateUrl: './admin-product.component.html',
  styleUrls: ['./admin-product.component.css']
})
export class AdminProductComponent implements OnInit {

  products: Product[];

  constructor(private menuService: MenuService, private router:Router) { }

  ngOnInit() {
    this.getProductList();
  }

  
  getProductList() {
    //tu t'abonnes à l'observable car tu as un traitement asynchrone, tu dois t'abonner à l'observable pour savoir quand ton traitement arrives
    this.menuService.getProducts().subscribe(
      (products: any) => {
        this.products = products
      }
    )
  }

  // Retourne l'ordre des objets au lieu d'un ordre par défaut qui fout le bordel
  //https://stackoverflow.com/questions/52793944/angular-keyvalue-pipe-sort-properties-iterate-in-order
  sortNull() {
    return 0;
  }

  addProduct(){
    this.router.navigate(['add-product']);
  }


  editProduct(product:Product): void {
    window.localStorage.setItem("editProductId", product.ID.toString());
    this.router.navigate(['edit-product']);
    
  };

  // update() {
  //   console.log("update du produit" + this.product.name + "...");
  // }

  // delete() {
  //   console.log("suppression du produit" + this.product.name + "...");
  // }

}
