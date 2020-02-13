import { Component, OnInit } from '@angular/core';
import { MenuService } from 'src/app/services/menu.service';
import { Product } from 'src/app/models/product';

import { faPepperHot } from '@fortawesome/free-solid-svg-icons';
import { faImage, faFileSignature, faUtensils } from '@fortawesome/free-solid-svg-icons';
import { KeyValue } from '@angular/common';


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


  products: {};

  constructor(private menuService: MenuService) { }

  ngOnInit() {
    this.getProductList();
  }

  getProductList() {
    //tu t'abonnes à l'observable car tu as un traitement asynchrone, tu dois t'abonner à l'observable pour savoir quand ton traitement arrives
    this.menuService.getProductsForMenuView().subscribe(
      (products: any) => {
        this.products = products
        console.log(products);
   
      }
    )
  }


  // Retourne l'ordre des objets au lieu d'un ordre par défaut qui fout le bordel
  //https://stackoverflow.com/questions/52793944/angular-keyvalue-pipe-sort-properties-iterate-in-order
sortNull() {
  return 0;
}

}
