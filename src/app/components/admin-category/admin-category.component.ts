import { Component, OnInit } from '@angular/core';
import { MenuService } from 'src/app/services/menu.service';
import { Router } from '@angular/router';
import { ProductCategory } from 'src/app/models/productCategory';
import { throwMatDuplicatedDrawerError } from '@angular/material';

@Component({
  selector: 'app-admin-category',
  templateUrl: './admin-category.component.html',
  styleUrls: ['./admin-category.component.css']
})
export class AdminCategoryComponent implements OnInit {

  categories : ProductCategory[];

  constructor(private menuService: MenuService, private router:Router) { }

  ngOnInit() {
    this.getCategoryList();

  }

  getCategoryList() {
    //tu t'abonnes à l'observable car tu as un traitement asynchrone, tu dois t'abonner à l'observable pour savoir quand ton traitement arrives
    this.menuService.getCategories().subscribe(
      (categories: any) => {
        this.categories = categories
      }
    )
  }

  addCategory(){
    this.router.navigate(['add-category']);
  }

 //https://www.devglan.com/angular/angular-6-example
 deleteCategory(category : ProductCategory) {

  console.log("deleted");
  this.menuService.deleteCategories(category.ID).subscribe(
    data => {
      this.categories = data;
      //je récupère les nouvelles data pour les afficher
    })
}


editCategory(categoryID:number){
  this.router.navigate(['edit-category', categoryID]);
}

}
