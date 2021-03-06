import { Component, OnInit } from '@angular/core';
import { ProductSubCategory } from 'src/app/models/productSubCategory';
import { MenuService } from 'src/app/services/menu.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-sub-category',
  templateUrl: './admin-sub-category.component.html',
  styleUrls: ['./admin-sub-category.component.css']
})
export class AdminSubCategoryComponent implements OnInit {

  subCategory:ProductSubCategory;

  constructor(private menuService: MenuService, private router:Router) { }

  ngOnInit() {
    this.getSubCategoryList();
  }

  
  getSubCategoryList() {
    //tu t'abonnes à l'observable car tu as un traitement asynchrone, tu dois t'abonner à l'observable pour savoir quand ton traitement arrives
    this.menuService.getGlobalSubCategories().subscribe(
      (subCategory: any) => {
        this.subCategory = subCategory
      }
    )
  }

  addSubCategory(){
    this.router.navigate(['add-sub-category']);
  }

  //https://www.devglan.com/angular/angular-6-example
deleteSubCategory(subCategory : ProductSubCategory) {
    //ouverture de la confirmation de suppression grace à angular Material
    this.menuService.openDialog().afterClosed().subscribe(
      result => {
        //je supprime seulement si confirmer est cliqué
        if(result == false){
         this.menuService.deleteSubCategories(subCategory.ID).subscribe(
            data => {
            this.subCategory = data;
          //je récupère les nouvelles data
        })
      }
    }
  );
}


  editSubCategory(categoryID:number){
    this.router.navigate(['edit-sub-category', categoryID]);
  }

  backToProductList(){
    this.router.navigate(['admin-menu']);
  }
  
  handleCategoryList(){
    this.router.navigate(['admin-category']);
  }
  
}
