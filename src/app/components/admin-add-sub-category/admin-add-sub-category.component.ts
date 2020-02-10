import { Component, OnInit } from '@angular/core';
import { ProductCategory } from 'src/app/models/productCategory';
import { FormBuilder, FormControlName, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MenuService } from 'src/app/services/menu.service';
import { ProductSubCategory } from 'src/app/models/productSubCategory';

@Component({
  selector: 'app-admin-add-sub-category',
  templateUrl: './admin-add-sub-category.component.html',
  styleUrls: ['./admin-add-sub-category.component.css']
})
export class AdminAddSubCategoryComponent implements OnInit {

  displayConfirmedChanges = false;

  productCategories: ProductCategory[];
  productSubCategories:ProductSubCategory[];
  name:FormControl;
  main_cat:FormControl;
  addSubCategoryForm:FormGroup

  constructor(private menuService: MenuService, private router:Router, private fb:FormBuilder) {

    this.name = this.fb.control("", [
      Validators.required
    ]);

    this.main_cat = this.fb.control("", [
      Validators.required
    ]);


    this.addSubCategoryForm = fb.group({
      name:this.name,
      main_cat:this.main_cat  
    });

   }



  ngOnInit() {
    this.getCategoryList();
  }


  getCategoryList(){
    this.menuService.getCategories().subscribe(
      (productCategories:ProductCategory[]) => {
        this.productCategories = productCategories
      }
    )
  }

  onSubmit(){
    if(this.addSubCategoryForm.valid){
      let pro = this.addSubCategoryForm.value as ProductSubCategory;
      this.menuService.addSubCategory(this.name.value, this.main_cat.value).subscribe(
          (data)=> console.log(data),
          error=> console.log(error) 
        );
      console.log(pro);
    }

  }

  displayMessage() {
    this.displayConfirmedChanges = true;
  }

  backToSubCategoryList(){
this.router.navigate(['admin-sub-category']);
  }



}
