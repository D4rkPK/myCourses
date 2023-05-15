import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs'

import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  private _myShoppingCart: Product[] = [];
  private myCart = new BehaviorSubject<Product[]>([]);

  myCart$ = this.myCart.asObservable(); // Observable

  constructor() { }

  public get myShoppingCart() {
    return this._myShoppingCart;
  }

  addProduct(product: Product) {
    this._myShoppingCart.push(product);
    this.myCart.next(this._myShoppingCart); // Emitir el nuevo valor
  }

  getShoppingCart() {
    return this._myShoppingCart;
  }

  getTotal() {
    return this._myShoppingCart.reduce((sum, item) => sum + item.price, 0);
  }
}
