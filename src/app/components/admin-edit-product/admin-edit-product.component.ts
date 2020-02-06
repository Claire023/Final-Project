import { Component, OnInit, Input } from '@angular/core';
import { Product } from 'src/app/models/product';
import { MenuService } from 'src/app/services/menu.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';


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
editProduct:FormGroup

  constructor(private menuService: MenuService,private fb: FormBuilder,private router:Router) { }

  ngOnInit() {
    // let productId = window.localStorage.getItem("editProductId");
    // if(!productId){
    //   alert("Action Invalide");
    //   this.router.navigate(['admin-menu']);
    //   return;
    // }
    // this.editProduct = this.fb.group({
    //   id: [''],
    //   name: ['', Validators.required],
    //   description: ['', Validators.required], 
    //   sub_category: ['', Validators.required],
    //   category: ['', Validators.required]

    // });

  }

// onSubmit(){
//   this.menuService.updateProducts(this.editProduct.value)
//   .subscribe(
//     (data)=> console.log(data),
//     error=> console.log(error) 
//   );
}





