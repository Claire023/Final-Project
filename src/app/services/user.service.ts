import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient){}
  
  getUsers():Observable<User[]>{

  return this.http.get<User[]>(`${environment.backUrl}?controller=user&action=getUserList`);

  }

addUsers(user:User):Observable<User>{
  return this.http.post<User>( `${environment.backUrl}?controller=user&action=addUser` , user);

}




}


