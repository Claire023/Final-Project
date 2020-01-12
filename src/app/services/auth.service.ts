import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import  *  as moment from "moment";

import {  User} from 'src/app/models/user';
import { Router} from '@angular/router';
import { environment } from 'src/environments/environment';



@Injectable({
  providedIn: 'root'
})
export class AuthService {

 

  constructor(private http: HttpClient, private router: Router) { }

  
   public login(email:string, password:string) {

    this.http.post<any>(`${environment.backUrl}?controller=user&action=connexionUser` , {email, password}).subscribe(
      req => {
        this.setSession(req);
        this.router.navigate(['/order'])
      },
        
      err => console.log('authentification échouée')

      
    )

   } 

private setSession(authResult) {


const expiresAt = moment().add(authResult.expiresIn,'second');

console.log(authResult);
  localStorage.setItem('idToken' , authResult.jwt);
  localStorage.setItem("expires_at", JSON.stringify(expiresAt.valueOf()) );

}


public logout() {
  localStorage.removeItem("id_token");
  localStorage.removeItem("expires_at");
}


public isLoggedIn() {
  return moment().isBefore(this.getExpiration());
}


isLoggedOut() {
  return !this.isLoggedIn();
}

getExpiration() {
  const expiration = localStorage.getItem("expires_at");
  const expiresAt = JSON.parse(expiration);
  return moment(expiresAt);
}


  

}
