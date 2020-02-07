import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Product } from '../models/product';
import { ProductCategory } from '../models/productCategory';
import { ProductSubCategory } from '../models/productSubCategory';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  constructor(private http:HttpClient) { }
//Je récupère tout mes items présentés dans le menu y conmpris les categories et sous categories
getProductsForMenuView():Observable<any>{
  return this.http.get<any>(`${environment.backUrl}?controller=product&action=getAllForMenu`);
  }


//Je récupère tout mes items présentés pour la page d'édition
getProducts():Observable<any>{
    return this.http.get<any>(`${environment.backUrl}?controller=product&action=getAll`);
    }

//Ajoute mes nouveaux produits dans la base
addProducts(name:string, description:string, id_cat:number, id_sub_category:number):Observable<any>{
  return this.http.post<Product>(`${environment.backUrl}?controller=product&action=addProduct` , {name, description, id_cat, id_sub_category});
}


deleteProducts(ID:number):Observable<any>{
  return this.http.delete<Product>(`${environment.backUrl}?controller=product&action=deleteProduct&ID=${ID}`);
}

//Je récupère tout mes items présentés pour la page d'édition
getCategories():Observable<ProductCategory[]>{
  return this.http.get<ProductCategory[]>(`${environment.backUrl}?controller=product&action=getCategory`);
  }


  //Je récupère toutes mes sous-catégories présentés pour la page d'édition
getSubCategories():Observable<ProductSubCategory[]>{
  return this.http.get<ProductSubCategory[]>(`${environment.backUrl}?controller=product&action=getSubCategory`);
  }
} 


