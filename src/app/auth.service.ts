import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, tap } from 'rxjs/operators';
import { throwError, Subject } from 'rxjs';
import {  User} from 'src/app/models/user';
import { Router} from '@angular/router';

//On implémente une interface pour la réponse : voir doc firebase signup 
export interface AuthReponseData  {
  kind:string;
  idToken	:string;	
  email :	string;
  refreshToken :	string;	
  expiresIn	: string;
  localId	: string;
  registered?: boolean;
}


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  //exporté de rxjs
  user = new Subject<User>();

  constructor(private http: HttpClient, private router: Router) { }

  signup(email:string, password:string) {
    //cette url vient de firebase
    return this.http.post<AuthReponseData>(
      'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyA-W_YdrlsZM5ZP8LcXd0xcFPjfv0gZLx4' , 
    {
      email:email,
      password: password,
      returnSecureToken:true,


    }).pipe(catchError(this.handleError), tap(resData => {
this.handleAuthentication(resData.email, resData.localId, resData.idToken, +resData.expiresIn);
    })
  );
    //tap : performe une action sans changer la réponse. 
  }







  login(email:string, password:string) {
    return this.http.post<AuthReponseData>(
      'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyA-W_YdrlsZM5ZP8LcXd0xcFPjfv0gZLx4',
       {
      email:email,
      password: password,
      returnSecureToken:true
  }).pipe(catchError(this.handleError), tap(resData => {
    this.handleAuthentication(resData.email, resData.localId, resData.idToken, +resData.expiresIn);
    
        })
        );
        //tap : performe une action sans changer la réponse.
}



logout() {
  this.user.next(null);
  this.router.navigate(['/register']);
}


private handleAuthentication (email:string, userId:string, token:string, expiresIn : number) {
   //par rapport aux attributs de firebase, multiplie par 1000 car c'est en ms
   const expirationDate = new Date(new Date().getTime() + expiresIn * 1000);
   const user = new User(
     email, 
     userId,
     token,
     expirationDate
    
   );

   this.user.next(user);
   
}

private handleError(errorRes: HttpErrorResponse) {
  //si l'erreur n'est pas identifiable
  let errorMessage = "Une erreur non identifiée s'est produite";
      if(!errorRes.error || !errorRes.error.error) {
        return throwError(errorMessage);
      }

      switch (errorRes.error.error.message) {
        case 'EMAIL_EXISTS' :
        errorMessage = "Cet email existe déjà";
        break;

        case 'EMAIL_NOT_FOUND' : 
        errorMessage : "Email non reconnu";
        break;
        case 'INVALID_PASSWORD' : 
        errorMessage : "Mot de passe ";
        break;


      }
      return throwError(errorMessage);
  }

}
