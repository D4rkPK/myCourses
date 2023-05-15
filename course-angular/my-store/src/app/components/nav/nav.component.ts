import { Component, OnInit } from '@angular/core';
//import { Product } from '../../models/product.model';

import { StoreService } from '../../services/store.service';


@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  //quantyProducts: Product[] = [];
  quantyProducts: number = 0;
  showMenu = false;

  constructor(
    private storeService: StoreService,
  ) {
    /* this.quantyProducts = this.storeService.myShoppingCart;
    console.log("Quanty products: ", this.quantyProducts); */

  }

  ngOnInit(): void {
    this.storeService.myCart$.subscribe(products => {
      this.quantyProducts = products.length;
    })
  }

  toggleMenu() {
    this.showMenu = !this.showMenu;
    /* //unsuscribe */
  }

}
