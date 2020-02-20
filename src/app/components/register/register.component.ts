import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators, ValidatorFn, ValidationErrors } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';

//Je checke si les 2 input sont identiques
export const checkConfirmPassword: ValidatorFn = (control: FormGroup) : ValidationErrors  | null => {

  return control.get('password').value !== control.get('passwordConfirm').value ? { 'differentPassword' : true } : null;
}


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {


  email : FormControl;
  password : FormControl;
  passwordConfirm: FormControl;
  registerForm:FormGroup;

  isLoading = false;
  
  
  constructor(private userService : UserService, private router:Router, private fb:FormBuilder) { 

    this.email = this.fb.control("", [
      Validators.required,
      Validators.email,
      
    ]);
    
//At least 8 characters in length
// Lowercase letters
// Uppercase letters
// Numbers
// Special characters
    this.password = this.fb.control("", [
      Validators.required,
      Validators.pattern('(?=\\D*\\d)(?=[^a-z]*[a-z])(?=[^A-Z]*[A-Z]).{8,30}'),
      Validators.minLength(8)
    ]);

    this.passwordConfirm = this.fb.control("", []);
    
    
    this.registerForm = fb.group({
      email:this.email,
      password:this.password,
      passwordConfirm:this.passwordConfirm
    
    }, 
    {
      //validateur confirmation mot de passe
      validator: checkConfirmPassword,
    });

  }


ngOnInit() {
}

//getters pour afficher les messages d'erreur
get mail(){
  return this.registerForm.get('email');
}

get pass(){
  return this.registerForm.get('password');
}

get passC(){
  return this.registerForm.get('password');
}


 onSubmit() {
  console.log(this.registerForm);
   //je vérifie si mon form est valide
   if(this.registerForm.valid){
   
     //j'instancie un user 
     let user : User = new User();
//je récupère les valeurs du user
     user.email = this.email.value;
     user.password = this.password.value;
     this.userService.addUsers(user).subscribe(
       //en cas de succés je redirige vers le login
      (data)=> {
        console.log(data);
        this.isLoading = true;
        this.router.navigate(['/login']);
      },
      (httpError)=> {
        //je récupère mon objet et je récupère le message qui va avec
        alert(httpError.error.message);
      }    
    );

   }
  }

}







