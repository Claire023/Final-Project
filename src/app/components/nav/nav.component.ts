import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faSearchLocation } from '@fortawesome/free-solid-svg-icons';


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
  faUser = faUser;
  
 
  ngOnInit() {
    
  }

    //je vérifie si user est connecté
isAuth() {
  return this.authService.isLoggedIn();

}

isAdmin() {
  // this.isShown = false;
  return this.authService.isAdmin();

}
  

onLogout() {
   this.authService.logout();
  }


}




