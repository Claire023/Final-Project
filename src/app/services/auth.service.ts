import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import  *  as moment from "moment";
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
        this.router.navigate(['/book'])
      },
        
      err => console.log('authentification échouée')
      
    )

   } 

private setSession(authResult) {

const expiresAt = moment().add(authResult.exp,'second');
  localStorage.setItem('idToken' , authResult.jwt);
  localStorage.setItem("expires_at", JSON.stringify(expiresAt.valueOf()));
  // window.location.reload();

}


public logout() {
  localStorage.removeItem("id_token");
  localStorage.removeItem("expires_at");
  localStorage.clear();
  window.location.reload();
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
