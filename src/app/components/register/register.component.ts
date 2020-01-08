import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth.service';
import { HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';



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

  constructor( private auth :AuthService, private http : HttpClient) { 

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
  const pseudo = form.value.pseudo;
  const email = form.value.email;
  const password = form.value.password;
  const passwordConfirm = form.value.passwordConfirm;

  this.isLoading = true;

  if(this.isLoginMode) {
    //…
  } else {
    
      this.auth.signup(email, password).subscribe(
         resData => {
        console.log(resData);
        this.isLoading = false;
    
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
