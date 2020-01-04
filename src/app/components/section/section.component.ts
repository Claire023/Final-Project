import { Component, OnInit } from '@angular/core';
import { faPepperHot} from '@fortawesome/free-solid-svg-icons';
import { faImage, faFileSignature, faUtensils } from '@fortawesome/free-solid-svg-icons';



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

  

  
  constructor(
    
  ) {
   
  }

 
  ngOnInit() {
    
  }


}
