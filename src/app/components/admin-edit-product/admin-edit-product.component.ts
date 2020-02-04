import { Component, OnInit, Input } from '@angular/core';
import { Product } from 'src/app/models/product';
import { MenuService } from 'src/app/services/menu.service';


@Component({
  selector: 'app-admin-edit-product',
  templateUrl: './admin-edit-product.component.html',
  styleUrls: ['./admin-edit-product.component.css']
})
export class AdminEditProductComponent implements OnInit {

  
//je fait une communication admin/menu -----> admin-edit-menu (parent/enfant) pour avoir les datas
@Input()
product: Product;


  constructor(private menuService: MenuService,) { }

  ngOnInit() {
  }




}
