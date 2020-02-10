import { Component, OnInit } from '@angular/core';
import { MenuService } from 'src/app/services/menu.service';
import { FormGroup, FormBuilder, Validators, FormControlName, FormControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ProductCategory } from 'src/app/models/productCategory';

@Component({
  selector: 'app-admin-edit-category',
  templateUrl: './admin-edit-category.component.html',
  styleUrls: ['./admin-edit-category.component.css']
})
export class AdminEditCategoryComponent implements OnInit {

  categories: ProductCategory;
  displayConfirmedChanges = false;

  //formBuilder declaration via formControlName
  name : FormControl;
  ID: FormControl;
  editCategory:FormGroup
  
  constructor(private menuService: MenuService,private fb: FormBuilder,private router:Router, private route: ActivatedRoute) {


    this.name = this.fb.control("", [
      Validators.required
    ]);

    this.ID = this.fb.control("", [
    Validators.required
    ]);


    this.editCategory = fb.group({
      name:this.name, 
      ID:this.ID 
    });

   }

  ngOnInit() {
    this.getCategoryById(this.route.snapshot.paramMap.get('id'))
  }


  getCategoryById(id:string){
    this.menuService.getCategoryById(id).subscribe(
      (categories) => {
        this.categories = this.categories;
        this.editCategory.get('ID').setValue(categories.ID);
        this.editCategory.get('name').setValue(categories.name);
      }
    )
  }


  onSubmit(){
    if(this.editCategory.valid){
    this.menuService.updateCategories(this.ID.value, this.name.value).subscribe(
      (data) => console.log(data),
      error => console.log(error)
    );
    console.log(this.editCategory.value);
    }
  }


  displayMessage(){
    this.displayConfirmedChanges = true;
  }

}
