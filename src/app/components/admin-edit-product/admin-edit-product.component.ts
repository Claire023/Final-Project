import { Component, OnInit, Input } from '@angular/core';
import { Product } from 'src/app/models/product';
import { MenuService } from 'src/app/services/menu.service';
import { FormGroup, FormBuilder, Validators, FormControlName, FormControl } from '@angular/forms';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { ProductCategory } from 'src/app/models/productCategory';
import { ProductSubCategory } from 'src/app/models/productSubCategory';
import { switchMap} from 'rxjs/operators';


@Component({
  selector: 'app-admin-edit-product',
  templateUrl: './admin-edit-product.component.html',
  styleUrls: ['./admin-edit-product.component.css']
})
export class AdminEditProductComponent implements OnInit {

  
//je fait une communication admin/menu -----> admin-edit-menu (parent/enfant) pour avoir les datas
// @Input()
// product: Product;

product: Product;
productCategories: ProductCategory[];
productSubCategories:ProductSubCategory[];

//formBuilder declaration via formControlName
name : FormControl;
description: FormControl;
id_cat: FormControl;
id_sub_category: FormControl;
editProduct:FormGroup

  constructor(private menuService: MenuService,private fb: FormBuilder,private router:Router, private route: ActivatedRoute) { 

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
    this.getProductById(this.route.snapshot.paramMap.get('id'));
  }

  

  getProductById(id:string){
    this.menuService.getProductById(id).subscribe(
      (product) => {
        this.product = product;
        this.getCategoryList();
        this.editProduct.get('name').setValue(product.name);
        this.editProduct.get('description').setValue(product.description);
        this.editProduct.get('id_cat').setValue(product.id_cat);
        this.editProduct.get('id_sub_category').setValue(product.id_sub_category);
      }
    )
  }


  getCategoryList(){
    this.menuService.getCategories().subscribe(
      (productCategories:ProductCategory[]) => {
        this.productCategories = productCategories;
        this.getSubCategoryList();
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


onSubmit(){
  if(this.editProduct.valid){
  this.menuService.updateProducts(this.product.ID, this.name.value, this.description.value,this.id_cat.value, this.id_sub_category.value).subscribe(
    (data) => console.log(data),
    error => console.log(error)
  );
  console.log(this.editProduct.value)

  }
}





}
