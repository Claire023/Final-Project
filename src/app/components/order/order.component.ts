import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';


@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})


export class OrderComponent implements OnInit {

  starers = new FormControl();
  starterList: string[] = ['Extra cheese 2,50 €', 'Mushroom 3 €', 'Onion 4 €'];

  main = new FormControl();
  mainList: string[] = ['Taco 2,50 €', 'Burrito 3 €'];


  desserts = new FormControl();
  dessertList: string[] = ['Tiramisu 2€'];

  drinks = new FormControl();
  drinkList: string[] = ['Coca 5 €', 'Orangina 1 €'];

  
  constructor() { }

  ngOnInit() {
  }


}
