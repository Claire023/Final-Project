import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Franchise} from '../models/franchise';
import { environment } from 'src/environments/environment';
import {MatDialog} from '@angular/material';
import { AlertComponent } from '../components/alert/alert.component';

@Injectable({
  providedIn: 'root'
})
export class FranchiseService {

  constructor(private http:HttpClient,public dialog:MatDialog) { }




  openDialog(){
    return this.dialog.open(AlertComponent);
        }

  getFranchiseMessages():Observable<Franchise[]>{
    return this.http.get<Franchise[]>(`${environment.backUrl}?controller=franchise&action=getFranchiseList`);
    }

  addFranchise(firstname:string, lastname:string, email:string, phone:string, city:string, intake:number, duration:number, message:string):Observable<Franchise> {
     return this.http.post<Franchise>(`${environment.backUrl}?controller=franchise&action=addFranchise` , 
     {firstname, lastname, email, phone, city, intake, duration, message} );         
    } 
  

deleteFranchise(ID:number):Observable<Franchise[]>{
  return this.http.delete<Franchise[]>(`${environment.backUrl}?controller=franchise&action=deleteFranchise&ID=${ID}`);
}



}
