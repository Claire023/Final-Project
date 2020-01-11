import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, EmailValidator, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  
  email : FormControl;
  password : FormControl;

  registerForm:FormGroup;
  

  
  constructor( private userService : UserService, private router:Router, private fb:FormBuilder) { 
  
    this.email = this.fb.control("", [

      Validators.required,
      Validators.email
    ]);
    
    this.password = this.fb.control("", [
    
      Validators.required,
      Validators.minLength(6)
    ]);
    
    
    
    this.registerForm = fb.group({
      email:this.email,
      password:this.password
    
    });
  }

  ngOnInit() {
    
  }
  

 onSubmit() {
   //je vérifie si mon form est valide
   if(this.registerForm.valid){
     //j'instancie un user 
     let user : User = new User();
//je récupère les valeurs du user
     user.email = this.email.value;
     user.password = this.password.value;
     this.userService.addUsers(user).subscribe(
       //en cas de succés je redirige vers le login
      (data)=> console.log(data),
      // this.router.navigate(['/login']),
      error=> console.log(error)    
    );

   }
  }

 

//  onSwitchMode() {
//    this.isLoginMode = !this.isLoginMode;
//  }



  // onSubmit(form:NgForm) {
  //   if(!form.valid) {
  //     return;
  //   }
// console.log('test');
  
//   const email = form.value.email;
//   const password = form.value.password;
//   const passwordConfirm = form.value.passwordConfirm;

//   let authObs: Observable<AuthReponseData>;


//   this.isLoading = true;

//   if(this.isLoginMode) {
//      authObs = this.auth.login(email,password);
//   } else {
    
//     authObs = this.auth.signup(email, password);

// //pour éviter de se répéter
//     authObs.subscribe(
//   resData => {
//     console.log(resData);
//     this.isLoading = false;
//     // Affiche l'onglet commander quand inscrit/loguedin
//     this.router.navigate(['/order']);

//   },


//   errorMessage => {
//     console.log(errorMessage);
//    this.error = errorMessage;
//    //Logique dans AuthService
    
//     this.isLoading = false;
//   }
// );


//       form.reset();

//   }

}







