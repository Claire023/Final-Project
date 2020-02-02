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


  getProducts():Observable<any>{
    return this.http.get<any>(`${environment.backUrl}?controller=product&action=getAll`);
    }

}
