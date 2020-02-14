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
        this.router.navigate(['/section'])
      },
        
      err => console.log('authentification échouée')
      
    )

   } 

private setSession(authResult) {

const expiresAt = moment().add(authResult.exp,'second');
  localStorage.setItem('idToken' , authResult.jwt);
  localStorage.setItem("expires_at", JSON.stringify(expiresAt.valueOf()));
  localStorage.setItem("isAdmin", authResult.isAdmin);
  

}

public logout() {
  localStorage.removeItem("id_token");
  localStorage.removeItem("expires_at");
  localStorage.removeItem("isAdmin");
  localStorage.clear();
  window.location.reload();
}

public isLoggedIn() {
  return moment().isBefore(this.getExpiration());
}

//je check si mon admin se connecte
public isAdmin(): boolean {
 let result: boolean = false;
   if(this.isLoggedIn()){
     //je récupere la valeur de isAdmin dans le localStorage car 1 est l'admin
    result = localStorage.getItem("isAdmin") === "true";
   }
   return result;
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
