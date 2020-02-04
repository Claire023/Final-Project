import { Injectable } from '@angular/core';
import { Book } from '../models/book';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor() { }

  public book( date:string,  phone:string) {
   
    // this.http.post<any>(`${environment.backUrl}?controller=user&action=connexionUser` , {email, password}).subscribe(
    //   req => {
    //     this.setSession(req);
    //     this.router.navigate(['/book'])
    //   },
        
    //   err => console.log('authentification échouée')
      
    // )
   } 
}
