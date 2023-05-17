import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {

  @Input('product') product!: Product;
  @Output() addedCart = new EventEmitter<Product>();
  @Output() showProduct = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

  onAddToCart() {
    this.addedCart.emit(this.product)
  }

  onShowDetail() {
    this.showProduct.emit(this.product.id)
  }

}
