import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Contact} from '../models/contact';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private http:HttpClient) { }

  getContacts():Observable<Contact[]>{

    return this.http.get<Contact[]>(`${environment.backUrl}?controller=contact&action=getContactList`);
  
    }

  sendContact(email:string, nom:string, sujet:string, message:string):Observable<any> {
    
     return this.http.post<Contact>(`${environment.backUrl}?controller=contact&action=addContact` , {email, nom, sujet, message} );
  
           
    } 
  
}

