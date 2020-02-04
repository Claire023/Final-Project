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


//Je récupère tout mes items présentés dans le menu y conmpris les categories et sous categories
  getProducts():Observable<any>{
    return this.http.get<any>(`${environment.backUrl}?controller=product&action=getAll`);
    }

    //Je récupère tout mes items présentés dans le menu y conmpris les categories et sous categories
  // getProductList():Observable<Product[]>{
  //   return this.http.get<Product[]>(`${environment.backUrl}?controller=product&action=getAll`);
  //   }

}
