import { Component, OnInit, Input } from '@angular/core';
import { Product } from 'src/app/models/product';
import { MenuService } from 'src/app/services/menu.service';
import { FormGroup, FormBuilder, Validators, FormControlName, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductCategory } from 'src/app/models/productCategory';
import { ProductSubCategory } from 'src/app/models/productSubCategory';


@Component({
  selector: 'app-admin-edit-product',
  templateUrl: './admin-edit-product.component.html',
  styleUrls: ['./admin-edit-product.component.css']
})
export class AdminEditProductComponent implements OnInit {

  
//je fait une communication admin/menu -----> admin-edit-menu (parent/enfant) pour avoir les datas
// @Input()
// product: Product;

products: Product;
productCategories: ProductCategory[];
productSubCategories:ProductSubCategory[];

//formBuilder declaration via formControlName
name : FormControl;
description: FormControl;
id_cat: FormControl;
id_sub_category: FormControl;
editProduct:FormGroup

  constructor(private menuService: MenuService,private fb: FormBuilder,private router:Router) { 

    this.name = this.fb.control("", [
      Validators.required
    ]);

    this.description = this.fb.control("", [
      Validators.required
    ]);

    this. id_sub_category = this.fb.control("", [
      Validators.required
    ]);


    this.id_cat= this.fb.control("", [
      Validators.required
    ]);

    this.editProduct = fb.group({
      name:this.name,
      description :this.description,
      id_cat:this.id_cat,
      id_sub_category:this. id_sub_category    
    });








  }

  ngOnInit() {
   this.getProductList();
   this.getCategoryList();
   this.getSubCategoryList();
  }

  getProductList() {
    //tu t'abonnes à l'observable car tu as un traitement asynchrone, tu dois t'abonner à l'observable pour savoir quand ton traitement arrives
    this.menuService.getProducts().subscribe(
      (products: any) => {
        this.products = products
      }
    )
  }


  getCategoryList(){
    this.menuService.getCategories().subscribe(
      (productCategories:ProductCategory[]) => {
        this.productCategories = productCategories
      }
    )
  }


  getSubCategoryList(){
    this.menuService.getSubCategories().subscribe(
      (productSubCategories:ProductSubCategory[]) => {
        this.productSubCategories = productSubCategories
      }
    )
  }


// onSubmit(){
//   this.menuService.updateProducts(this.editProduct.value)
//   .subscribe(
//     (data)=> console.log(data),
//     error=> console.log(error) 
//   );
}





