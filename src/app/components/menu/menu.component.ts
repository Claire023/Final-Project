import { Component, OnInit } from '@angular/core';
import { MenuService } from 'src/app/services/menu.service';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {


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

  // Retourne l'ordre des objets au lieu d'un ordre par défaut 
  //https://stackoverflow.com/questions/52793944/angular-keyvalue-pipe-sort-properties-iterate-in-order
sortNull() {
  return 0;
}

}
