
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';



@Component({
  selector: 'app-login',
  templateUrl: 'login.component.html',
  styleUrls: ['./login.component.css']

})



export class LoginComponent implements OnInit {

    email : FormControl;
    password : FormControl;
    loginForm:FormGroup;
  

    constructor(private authService : AuthService, private router:Router, private fb:FormBuilder) {
        

        this.email = this.fb.control("", [
            Validators.required,
            Validators.email
          ]);
          
          this.password = this.fb.control("", [
            Validators.required
          ]);
          
          
          this.loginForm = fb.group({
            email:this.email,
            password:this.password
          
          });

        }
        
        
        ngOnInit() {
          
        }
        
        get mail(){
          return this.loginForm.get('email');
        }

        get pass(){
          return this.loginForm.get('password');
        }

    onSubmit() {
        if(this.loginForm.valid) {
            this.authService.login(this.email.value, this.password.value);
        }
    }
  
}