import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Contact} from '../models/contact';
import { environment } from 'src/environments/environment';
import {MatDialog} from '@angular/material';
import { AlertComponent } from '../components/alert/alert.component';


@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private http:HttpClient,public dialog:MatDialog) { }

  openDialog(){
    return this.dialog.open(AlertComponent);
        }

  getContacts():Observable<Contact[]>{

    return this.http.get<Contact[]>(`${environment.backUrl}?controller=contact&action=getContactList`);
  
    }

  sendContact(email:string, nom:string, sujet:string, message:string):Observable<any> {
    
     return this.http.post<Contact>(`${environment.backUrl}?controller=contact&action=addContact` , {email, nom, sujet, message} );
      
    } 


  deleteContact(id:number):Observable<Contact[]>{
     return this.http.delete<Contact[]>(`${environment.backUrl}?controller=contact&action=deleteContact&ID=${id}`);
    }


}

