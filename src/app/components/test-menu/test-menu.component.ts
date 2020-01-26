import { Component, OnInit } from '@angular/core';
import {  MenuService } from 'src/app/services/menu.service';
import { Product } from 'src/app/models/product';


@Component({
  selector: 'app-test-menu',
  templateUrl: './test-menu.component.html',
  styleUrls: ['./test-menu.component.css']
})
export class TestMenuComponent implements OnInit {

  products: Product[] = [];
  // formattedProduct: Array<Product[]>;

  constructor(private menuService:MenuService) { }

  ngOnInit() {
    this.getProductList();
  }


  getProductList() {
//tu t'abonnes à l'observable car tu as un traitement asynchrone, tu dois t'abonner à l'observable pour savoir quand ton traitement arrives
this.menuService.getProducts().subscribe(
  (products: Product[]) => { 
    this.products = products
    console.log(products)
    // this.getFormattedProductList()

    }
  )
}

// getFormattedProductList() {
  //je prends ma liste de produit non triés j'applique ensuite la methode reduce qui 
  //réordonne les produits par catégorie et sous categorie
  //on a un accumulateur qui est initialisé avec un objet vide
  // this.formattedProduct = this.products.reduce<Array<Product[]>>((acc, value) => {
    // //key correspond a la categorie
    // let key = value.category
    //idem pour la sous-categorei avec key2 
    // let key2 = value.sub_category;
    //on vérifie que l'accumulateur ai un attribit categorie
    // if(!acc[key]) {    
      //Si pas d'attribut alors il est crée sous forme d'objet
    //   acc[key] = [];
    // }
    // if(!acc[key][key2]) {
      //Dans notre objet, on vérifie qu'il y ai key2 si n'existe pas alors création de l'attribut sous 
      //forme de tableau 
      // acc[key][key2] = [];
    // }
    //La, en fait dans le tableau, on a des objet qui correspondent à chaque produit
//     acc[key][key2].push(value);
//     return acc;
//   }, []);
//   console.log(this.formattedProduct);
  
// }

  
}
