import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  users:User[] = [];

  constructor(private userService:UserService) { }

  
  ngOnInit() {
   this.getUserList();
  }

  
  getUserList(){
    //tu t'abonnes à l'observable car tu as un traitement asynchrone, tu dois t'abonner à l'observable pour  savoir quand ton traitemenbt arrives
    this.userService.getUsers().subscribe(
      (users: User[]) => this.users = users
   )
  }

}
