import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-franchise',
  templateUrl: './franchise.component.html',
  styleUrls: ['./franchise.component.css']
})
export class FranchiseComponent implements OnInit {

  firstname: FormControl;
  lastname: FormControl;
  email: FormControl;
  phone: FormControl;
  city: FormControl;
  duration: FormControl;
  intake:FormControl;
  month: FormControl;
  message:FormControl;
  joinForm:FormGroup;

  //Montre le message lorsque contact appuie sur bouton envoyer
  displayConfirmedSend = false;

  constructor(private fb:FormBuilder) {


    this.firstname= this.fb.control("", [
      Validators.required,
    ]);

    this.lastname= this.fb.control("", [
      Validators.required,
    ]);

    this.email = this.fb.control("", [
      Validators.required,
      Validators.email
    ]);

    this.phone= this.fb.control("", [
      Validators.required,
    ]);

    this.city= this.fb.control("", [
      Validators.required,
    ]);

    this.intake= this.fb.control("", [
      Validators.required,
    ]);

    this.duration= this.fb.control("", [
      Validators.required,
    ]);

    this.message = this.fb.control("", [
      Validators.required,
    ]);


    this.joinForm = fb.group({
      firstname : this.firstname,
      lastname : this.lastname,
      email:this.email,
      phone:this.phone,
      city:this.city,
      intake:this.intake,
      duration:this.duration,  
      message:this.message,    
        
    });


   }

  ngOnInit() {
  }



  onSubmit() {
    console.log(this.joinForm.value);
    // if(this.contactForm.valid) {
    //   console.log('clicked');
    //     this.contactService.sendContact(this.email.value, this.nom.value,this.sujet.value, this.message.value)
    //     .subscribe(
    //       (data)=> console.log(data),
    //       error=> console.log(error) 
    //     );
    //  }
   } 

   displayMessage() {
     this.displayConfirmedSend = true;
   }

}
