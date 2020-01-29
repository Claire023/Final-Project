import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Product } from '../models/product';
import { ProductCategory } from '../models/productCategory';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  constructor(private http:HttpClient) { }


  getProducts():Observable<Product[]>{
    return this.http.get<Product[]>(`${environment.backUrl}?controller=product&action=getProductList`);
    }

//je récupère mes catégories de produits
    getProductCategory():Observable<ProductCategory[]>{
      return this.http.get<ProductCategory[]>(`${environment.backUrl}?controller=product&action=getProductCategoryList`);
      }

      //Je récupère mes sous-catégories de boissons
    getDrinkSubCategory():Observable<Product[]>{
      return this.http.get<Product[]>(`${environment.backUrl}?controller=product&action=getDrinkCategoryList`);
      }

 //Je récupère mes sous-catégories d'entrées
    getStarterSubCategory():Observable<Product[]>{
      return this.http.get<Product[]>(`${environment.backUrl}?controller=product&action=getStarterCategoryList`);
  }

   //Je récupère mes sous-catégories de plats
   getMainSubCategory():Observable<Product[]>{
    return this.http.get<Product[]>(`${environment.backUrl}?controller=product&action=getMainCategoryList`);
}

   //Je récupère mes sous-catégories de desserts
   getDessertSubCategory():Observable<Product[]>{
    return this.http.get<Product[]>(`${environment.backUrl}?controller=product&action=getDessertCategoryList`);
}


 //Je récupère mes sous-catégories de digestifs
 getDigSubCategory():Observable<Product[]>{
  return this.http.get<Product[]>(`${environment.backUrl}?controller=product&action=getDigCategoryList`);
}


 //Je récupère mes sous-catégories de digestifs
 getStarter():Observable<Product[]>{
  return this.http.get<Product[]>(`${environment.backUrl}?controller=product&action=getStarterList`);
}



}
