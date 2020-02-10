import { Component, OnInit } from '@angular/core';
import { MenuService } from 'src/app/services/menu.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductCategory } from 'src/app/models/productCategory';


@Component({
  selector: 'app-admin-add-category',
  templateUrl: './admin-add-category.component.html',
  styleUrls: ['./admin-add-category.component.css']
})
export class AdminAddCategoryComponent implements OnInit {

displayConfirmedChanges = false;
productCategories: ProductCategory[];

 name: FormControl;
 addCategoryForm:FormGroup;


  constructor(private menuService:MenuService, private router:Router, private fb:FormBuilder ) { 

    this.name = this.fb.control("", [
      Validators.required
    ]);

    this.addCategoryForm = fb.group({
      name:this.name,
    });

  }

  ngOnInit() {
  }


  onAddCategory(){
    if(this.addCategoryForm.valid){
      this.menuService.addCategories(this.name.value)
        .subscribe(
          (data)=> console.log(data),
          error=> console.log(error) 
        );
      console.log(this.addCategoryForm.value);
    }
  }

displayMessage(){
  this.displayConfirmedChanges = true;
}

backToCategoryList(){
  this.router.navigate(['admin-category']);
}



}
