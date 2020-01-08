import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

//On implémente une interface pour la réponse : voir doc firebase signup 
interface AuthReponseData  {
  idToken	:string;	
  email :	string;
  refreshToken :	string;	
  expiresIn	: string;
  localId	: string

}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  signup(email:string, password:string) {
    //cette url vient de firebase
    return this.http.post<AuthReponseData>(
      'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyA-W_YdrlsZM5ZP8LcXd0xcFPjfv0gZLx4' , 
    {
      email:email,
      password: password,
      returnSecureToken:true

    }).pipe(catchError(errorRes => {
      //si l'erreur n'est pas identifiable
      let errorMessage = "Une erreur non identifiée s'est produite";
      if(!errorRes.error || !errorRes.error.error) {
        return throwError(errorMessage);
      }

      switch (errorRes.error.error.message) {
        case 'EMAIL_EXISTS' :
        errorMessage = "Cet email existe déjà";
      }
      return throwError(errorMessage);

    }));
    ;
  }



}
