import { Component, OnInit } from '@angular/core';
import { faPepperHot} from '@fortawesome/free-solid-svg-icons';
import { faImage, faFileSignature, faUtensils } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  faPepperHot = faPepperHot;
  faUtensils = faUtensils;
  faImage = faImage;
  faFileSignature = faFileSignature;

  constructor() { }

  ngOnInit() {
  }

}
