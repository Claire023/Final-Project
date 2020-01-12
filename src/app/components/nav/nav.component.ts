import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faSearchLocation } from '@fortawesome/free-solid-svg-icons';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  isAuthenticated = false;
  

  constructor( private authService : AuthService) {
   
  }


//Logos from nav
  faSearchLocation = faSearchLocation;
  faUser = faUser;
  faCoffee = faCoffee;

  
 

  ngOnInit() {
    // this.userSub = this.auth.user.subscribe(user => {
    //   this.isAuthenticated = !!user;

    // });
  }


  displayDeconnexion() {
    this.authService.isLoggedIn();

  }

  onLogout() {
    this.authService.logout();

  }


 
}




