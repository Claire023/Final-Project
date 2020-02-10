import { Component, OnInit } from '@angular/core';
import { MenuService } from 'src/app/services/menu.service';
import { FormGroup, FormBuilder, Validators, FormControlName, FormControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ProductCategory } from 'src/app/models/productCategory';
import { ProductSubCategory } from 'src/app/models/productSubCategory';

@Component({
  selector: 'app-admin-edit-sub-category',
  templateUrl: './admin-edit-sub-category.component.html',
  styleUrls: ['./admin-edit-sub-category.component.css']
})
export class AdminEditSubCategoryComponent implements OnInit {

productCategories: ProductCategory[];
productSubCategories:ProductSubCategory;

name:FormControl;
main_cat:FormControl;
editSubCategoryForm:FormGroup;

  constructor(private menuService: MenuService,private fb: FormBuilder,private router:Router, private route: ActivatedRoute) { 

    this.name = this.fb.control("", [
      Validators.required
    ]);

    this.main_cat= this.fb.control("", [
      Validators.required
    ]);

    this.editSubCategoryForm = fb.group({
      name:this.name,
      main_cat :this.main_cat
       
    });

  }


  ngOnInit() {
    this.getSubCategoryById(this.route.snapshot.paramMap.get('id'));
    this.getCategoryList();
  }

 
  getSubCategoryById(id:string){
    this.menuService.getSubCategoryById(id).subscribe(
      (productSubCategories:ProductSubCategory) => {
        this.getCategoryList();
        this.productSubCategories = productSubCategories;
        this.editSubCategoryForm.get('name').setValue(productSubCategories.name);
        this.editSubCategoryForm .get('main_cat').setValue(productSubCategories.main_cat);
      }
    )
  }


getCategoryList(){
    this.menuService.getCategories().subscribe(
      (productCategories:ProductCategory[]) => {
        this.productCategories = productCategories;
      }
    )
  }



  onSubmit(){
    if(this.editSubCategoryForm.valid){
      this.menuService.updateSubCategories(this.productSubCategories.ID, this.name.value,this.main_cat.value).subscribe(
        (data) => console.log(data),
        error => console.log(error)
      );
  
      console.log(this.editSubCategoryForm.value);
    
      }
  }


}
