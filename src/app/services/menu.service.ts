import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Product } from '../models/product';
import { ProductCategory } from '../models/productCategory';
import { ProductSubCategory } from '../models/productSubCategory';
import {MatDialog} from '@angular/material';
import { AlertComponent } from '../components/alert/alert.component';


@Injectable({
  providedIn: 'root'
})
export class MenuService {

  constructor(private http:HttpClient, public dialog:MatDialog) { }

  openDialog(){
    return this.dialog.open(AlertComponent);
        }
      
//Je récupère tout mes items présentés dans le menu y conmpris les categories et sous categories
//Je récupère tout mes items présentés dans le menu y conmpris les categories et sous categories
getProductsForMenuView():Observable<any>{
  return this.http.get<any>(`${environment.backUrl}?controller=product&action=getAllForMenu`);
  }


//Je récupère tout mes items présentés pour la page d'édition
getProducts():Observable<any>{
    return this.http.get<any>(`${environment.backUrl}?controller=product&action=getAll`);
    }

//pour la page editer  
getProductById(ID:string):Observable<Product>{
  return this.http.get<Product>(`${environment.backUrl}?controller=product&action=getProductById&ID=${ID}`);

}

//Ajoute mes nouveaux produits dans la base
addProducts(name:string, description:string, id_cat:number, id_sub_category:number):Observable<any>{
  return this.http.post<Product>(`${environment.backUrl}?controller=product&action=addProduct` , { name, description, id_cat, id_sub_category});
}

updateProducts(ID: number, name:string, description:string, id_cat:number, id_sub_category:number):Observable<any>{
  return this.http.put<Product>(`${environment.backUrl}?controller=product&action=updateProduct`, {ID, name, description, id_cat, id_sub_category} );
}

deleteProducts(ID:number):Observable<Product[]>{
  return this.http.delete<Product[]>(`${environment.backUrl}?controller=product&action=deleteProduct&ID=${ID}`);
}

//Je récupère tout mes items présentés pour la page d'édition
getCategories():Observable<ProductCategory[]>{
  return this.http.get<ProductCategory[]>(`${environment.backUrl}?controller=product&action=getCategory`);
  }

  //pour la page editer  
getCategoryById(ID:string):Observable<ProductCategory>{
  return this.http.get<ProductCategory>(`${environment.backUrl}?controller=product&action=getCategoryById&ID=${ID}`);

}

//Ajoute mes nouvelles categories dans la base
addCategories(name:string):Observable<any>{
  return this.http.post<ProductCategory>(`${environment.backUrl}?controller=product&action=addCategory` , {name});
}

updateCategories(ID: number, name:string):Observable<any>{
  return this.http.put<ProductCategory>(`${environment.backUrl}?controller=product&action=updateCategory`, {ID, name} );
}


deleteCategories(ID:number):Observable<ProductCategory[]>{
  return this.http.delete<ProductCategory[]>(`${environment.backUrl}?controller=product&action=deleteCategory&ID=${ID}`);
}


  //Je récupère toutes mes sous-catégories présentés pour la page d'édition
getSubCategories():Observable<ProductSubCategory[]>{
  return this.http.get<ProductSubCategory[]>(`${environment.backUrl}?controller=product&action=getSubCategory`);
  }

    //Je récupère toutes mes sous-catégories présentés pour la page ou elles sont listées
getGlobalSubCategories():Observable<ProductSubCategory[]>{
  return this.http.get<ProductSubCategory[]>(`${environment.backUrl}?controller=product&action=getGlogalSubCategory`);
  }

  //pour la page editer  
getSubCategoryById(ID:string):Observable<ProductCategory>{
    return this.http.get<ProductSubCategory>(`${environment.backUrl}?controller=product&action=getSubCategoryById&ID=${ID}`);
  
  }

  //Ajoute mes nouvelles sous-catégories dans la base
addSubCategory(name:string, main_cat:number):Observable<any>{
  return this.http.post<ProductCategory>(`${environment.backUrl}?controller=product&action=addSubCategory` , { name, main_cat});
}

updateSubCategories(ID: number, name:string, main_cat:number):Observable<any>{
  return this.http.put<Product>(`${environment.backUrl}?controller=product&action=updateSubCategory`, {ID, name, main_cat} );
}

deleteSubCategories(ID:number):Observable<ProductSubCategory>{
    return this.http.delete<ProductSubCategory>(`${environment.backUrl}?controller=product&action=deleteSubCategory&ID=${ID}`);
  }

} 


