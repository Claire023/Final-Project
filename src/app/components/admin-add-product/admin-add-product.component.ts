import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { MenuService } from 'src/app/services/menu.service';
import { Router } from '@angular/router';
import { ProductCategory } from 'src/app/models/productCategory';
import { ProductSubCategory } from 'src/app/models/productSubCategory';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';


@Component({
  selector: 'app-admin-add-product',
  templateUrl: './admin-add-product.component.html',
  styleUrls: ['./admin-add-product.component.css']
})
export class AdminAddProductComponent implements OnInit {

  //empty array declaration
  products: Product[];
  productCategories: ProductCategory[];
  productSubCategories:ProductSubCategory[];

//Montre le message lorsque produit modifié avec succès appuie sur bouton valider changements
   displayConfirmedChanges = false;

//formBuilder declaration via formControlName
  name : FormControl;
  description: FormControl;
  id_cat: FormControl;
  id_sub_category: FormControl;
  addProductForm:FormGroup;


  constructor(private menuService: MenuService, private router:Router, private fb:FormBuilder) { 

    this.name = this.fb.control("", [
      Validators.required
    ]);

    this.description = this.fb.control("", [
      
    ]);

    this. id_sub_category = this.fb.control("", [
     
    ]);


    this.id_cat= this.fb.control("", [
      Validators.required
    ]);

    this.addProductForm = fb.group({
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


  //Pour récupérer les select
  //https://stackoverflow.com/questions/47011521/angular-4-select-default-value-in-dropdown-reactive-forms

  onSubmit(){
    if(this.addProductForm.valid){
      let pro = this.addProductForm.value as Product;
      this.menuService.addProducts(this.name.value, this.description.value,this.id_cat.value, this.id_sub_category.value)
        .subscribe(
          (data)=> console.log(data),
          error=> console.log(error) 
        );
      console.log(pro);
    }
  }


  displayMessage() {
    this.displayConfirmedChanges = true;
  }


  backToProductList(){
    this.router.navigate(['admin-menu']);
  }

}
