import { Component, OnInit, Input } from '@angular/core';
import { Product } from 'src/app/models/product';
import { MenuService } from 'src/app/services/menu.service';
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


  addProduct(){
    this.router.navigate(['add-product']);
  }


//https://www.devglan.com/angular/angular-6-example
  deleteProduct(product : Product) {

    console.log("deleted");
    this.menuService.deleteProducts(product.ID).subscribe(
      data => {
        this.products = data;
        //je récupère les nouvelles data
      })
  }

  editProduct(productID:number){
    this.router.navigate(['edit-product', productID]);
  }

  handleCategory(){
    this.router.navigate(['admin-category']);
  }


  handleSubCategory(){
    this.router.navigate(['admin-sub-category']);
  }

}
