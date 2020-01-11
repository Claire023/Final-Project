import { Component, OnInit } from '@angular/core';
import { AuthService, AuthReponseData } from 'src/app/auth.service';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  
  
  isLoginMode = true;
  isLoading = false;
  error :string = null;


  // registerUserData = {}

  constructor( private auth :AuthService, private router:Router) { 

  }

  ngOnInit() {
    

  }

 onSwitchMode() {
   this.isLoginMode = !this.isLoginMode;
 }



  onSubmit(form:NgForm) {
    if(!form.valid) {
      return;
    }
console.log('test');
  
  const email = form.value.email;
  const password = form.value.password;
  const passwordConfirm = form.value.passwordConfirm;

  let authObs: Observable<AuthReponseData>;


  this.isLoading = true;

  if(this.isLoginMode) {
     authObs = this.auth.login(email,password);
  } else {
    
    authObs = this.auth.signup(email, password);

//pour éviter de se répéter
    authObs.subscribe(
  resData => {
    console.log(resData);
    this.isLoading = false;
    // Affiche l'onglet commander quand inscrit/loguedin
    this.router.navigate(['/order']);

  },


  errorMessage => {
    console.log(errorMessage);
   this.error = errorMessage;
   //Logique dans AuthService
    
    this.isLoading = false;
  }
);


      form.reset();

  }

}


  // registerUser() {
  //   console.log(this.registerUserData);
  //   this.http.post('https://final-project-1bbca.firebaseio.com/posts.json' , this.registerUserData)
  //   .subscribe(responseData => {
  //     console.log(responseData)
  //   });
  // }



}
