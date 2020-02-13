import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { FranchiseService } from 'src/app/services/franchise.service';


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

  constructor(private fb:FormBuilder, private franchiseService: FranchiseService) {


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
    // console.log(this.joinForm.value);
    if(this.joinForm.valid) {
        this.franchiseService.addFranchise(this.firstname.value, this.lastname.value, this.email.value, this.phone.value, this.city.value, this.intake.value, this.duration.value, this.message.value).subscribe(
          (data)=> {
            console.log(data)
            //je reset le form à l'envoi
            this.joinForm.reset();
          },
          error=> console.log('une erreur est survenue') 
        );
     }
   } 

   displayMessage() {
     this.displayConfirmedSend = true;
   }

}
