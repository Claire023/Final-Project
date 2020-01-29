import { Component, OnInit } from '@angular/core';
import {  MenuService } from 'src/app/services/menu.service';
import { Product } from 'src/app/models/product';
import { ProductCategory } from 'src/app/models/productCategory';

import { faPepperHot} from '@fortawesome/free-solid-svg-icons';
import { faImage, faFileSignature, faUtensils } from '@fortawesome/free-solid-svg-icons';



@Component({
  selector: 'app-test-menu',
  templateUrl: './test-menu.component.html',
  styleUrls: ['./test-menu.component.css']
})
export class TestMenuComponent implements OnInit {

  faPepperHot = faPepperHot;
  faUtensils = faUtensils;
  faImage = faImage;
  faFileSignature = faFileSignature;

  products: Product[] = [];
  productCategory: ProductCategory[] = [];
  drinkSubCategory: Product[] = [];
  starterSubCategory: Product[] = [];
  mainSubCategory:Product[] = [];
  dessertSubCategory:Product[] = [];
  digSubCategory:Product[] = [];
  starter:Product[] = [];
  
  // formattedProduct: Array<Product[]>;

  constructor(private menuService:MenuService) { }

  ngOnInit() {
    this.getProductList();
    this.getProductCategoryList();
    this.getDrinkSubCategoryList();
    this.getStarterSubCategoryList();
    this.getMainSubCategoryList();
    this.getDessertSubCategoryList();
    this.getDigSubCategoryList();
    this.getStarterList();

  }


  getProductList() {
//tu t'abonnes à l'observable car tu as un traitement asynchrone, tu dois t'abonner à l'observable pour savoir quand ton traitement arrives
this.menuService.getProducts().subscribe(
  (products: Product[]) => { 
    this.products = products
    // this.getFormattedProductList()
    }
  )
}


getProductCategoryList() {
  //tu t'abonnes à l'observable car tu as un traitement asynchrone, tu dois t'abonner à l'observable pour savoir quand ton traitement arrives
  this.menuService.getProductCategory().subscribe(
    (productCategory: ProductCategory[]) => { 
      this.productCategory = productCategory
      }
    )
  }

  getDrinkSubCategoryList() {
    //tu t'abonnes à l'observable car tu as un traitement asynchrone, tu dois t'abonner à l'observable pour savoir quand ton traitement arrives
    this.menuService.getDrinkSubCategory().subscribe(
      (drinkSubCategory: Product[]) => { 
        this.drinkSubCategory = drinkSubCategory
        }
      )
    }

    getStarterSubCategoryList() {
      //tu t'abonnes à l'observable car tu as un traitement asynchrone, tu dois t'abonner à l'observable pour savoir quand ton traitement arrives
      this.menuService.getStarterSubCategory().subscribe(
        (starterSubCategory: Product[]) => { 
          this.starterSubCategory = starterSubCategory
          }
        )
      }

      getMainSubCategoryList() {
        //tu t'abonnes à l'observable car tu as un traitement asynchrone, tu dois t'abonner à l'observable pour savoir quand ton traitement arrives
        this.menuService.getMainSubCategory().subscribe(
          (mainSubCategory: Product[]) => { 
            this.mainSubCategory = mainSubCategory
            }
          )
        }
  

      getDessertSubCategoryList() {
        //tu t'abonnes à l'observable car tu as un traitement asynchrone, tu dois t'abonner à l'observable pour savoir quand ton traitement arrives
        this.menuService.getDessertSubCategory().subscribe(
          (dessertSubCategory: Product[]) => { 
            this.dessertSubCategory = dessertSubCategory
            }
          )
        }


        getDigSubCategoryList() {
          //tu t'abonnes à l'observable car tu as un traitement asynchrone, tu dois t'abonner à l'observable pour savoir quand ton traitement arrives
          this.menuService.getDigSubCategory().subscribe(
            (digSubCategory: Product[]) => { 
              this.digSubCategory = digSubCategory
              }
            )
          }
  

          getStarterList() {
            //tu t'abonnes à l'observable car tu as un traitement asynchrone, tu dois t'abonner à l'observable pour savoir quand ton traitement arrives
            this.menuService.getStarter().subscribe(
              (starter: Product[]) => { 
                this.starter = starter
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
