import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { BookService } from 'src/app/services/book.service';
import { DateValidator } from 'src/app/models/DateValidator';


@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit  {

 

  // personNumber: FormControl;
  date: FormControl;
  // hour: FormControl;
  phone:FormControl;
  bookForm:FormGroup;

//rajouter une vérification de la date 
  personNum: any = [1,2,3,4,5,6,7,8,9,10];

  constructor(private BookService:BookService, private fb:FormBuilder) {
    
    // this.personNumber = this.fb.control("", [Validators.required]);
    this.date = this.fb.control("", [ Validators.compose([Validators.required, DateValidator.dateValidator])]);
    // this.hour = this.fb.control("", [ Validators.required]);
    this.phone = this.fb.control("", [ Validators.required]);

    this.bookForm = this.fb.group({
      // personNumer:["", [Validators.required]],
      date:this.date, 
      // hour:this.hour,
      phone:this.phone
    });
    
  }
  
   
  ngOnInit() {
  }

  

  onSubmit() {
    if(this.bookForm.valid) {
      this.BookService.book(this.date.value, this.phone.value);
      console.log(this.bookForm.value);
    }

      }
    
    
    // if(this.bookForm.valid) {
    //   console.log('booked');
    //     this.BookService.book(this.date.value, this.hour.value, this.phone.value);
    // }
}


