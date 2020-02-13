import { Component, OnInit } from '@angular/core';
import { faPepperHot} from '@fortawesome/free-solid-svg-icons';
import { faImage, faFileSignature, faUtensils } from '@fortawesome/free-solid-svg-icons';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { ContactService } from 'src/app/services/contact.service';


@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.css']
})
export class SectionComponent implements OnInit {

  faPepperHot = faPepperHot;
  faUtensils = faUtensils;
  faImage = faImage;
  faFileSignature = faFileSignature;


  email : FormControl;
  nom: FormControl;
  sujet: FormControl;
  message: FormControl;
  contactForm:FormGroup;

  //Montre le message lorsque contact appuie sur bouton envoyer
  displayConfirmedSend = false;


  constructor(private contactService : ContactService, private fb:FormBuilder) {

    this.email = this.fb.control("", [
      Validators.required,
      Validators.email
    ]);

    this.nom= this.fb.control("", [
      Validators.required,
    ]);

    this.sujet = this.fb.control("", [
      Validators.required,
    ]);

    this.message = this.fb.control("", [
      Validators.required,
    ]);


    this.contactForm = fb.group({
      email:this.email,
      nom:this.nom,
      sujet:this.sujet,
      message:this.message,    
    });

  }

  
  ngOnInit() {
    
  }


  onSubmit() {
    if(this.contactForm.valid) {
      console.log('clicked');
        this.contactService.sendContact(this.email.value, this.nom.value,this.sujet.value, this.message.value)
        .subscribe(
          (data)=> {
            console.log(data);
            //je reset on form
            this.contactForm.reset();
          } ,
          error=> console.log(error) 
        );
     }
   } 

   displayMessage() {
     this.displayConfirmedSend = true;
   }


}
