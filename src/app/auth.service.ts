import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, tap } from 'rxjs/operators';

import {  User} from 'src/app/models/user';
import { Router} from '@angular/router';

//On implémente une interface pour la réponse : voir doc firebase signup 
// export interface AuthReponseData  {
//   kind:string;
//   idToken	:string;	
//   email :	string;
//   refreshToken :	string;	
//   expiresIn	: string;
//   localId	: string;
//   registered?: boolean;
// }


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  //exporté de rxjs
  // user = new Subject<User>();

  constructor(private http: HttpClient, private router: Router) { }

  
    




  

}
