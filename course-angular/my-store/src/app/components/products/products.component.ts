import { Component } from '@angular/core';

import { Product, CreateProductDTO, updateProductDTO } from '../../models/product.model';

import { StoreService } from '../../services/store.service';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent {

  myShoppingCart: Product[] = [];
  products: Product[] = [];
  showProductDetail = false;
  productChosen: Product = {
    id: 0,
    title: "",
    price: 0,
    image: "",
    description: "",
    category: "",
  };

  constructor(
    private storeService: StoreService,
    private productService: ProductService,
  ) {
    this.myShoppingCart = this.storeService.getShoppingCart();
  }

  ngOnInit(): void {
    this.productService.getAllProducts()
      .subscribe(data => {
        this.products = data;
      })
  }

  onAddToShoppingCart(product: Product) {
    this.storeService.addProduct(product);
  }

  toggleProductDetail() {
    this.showProductDetail = !this.showProductDetail;
  }

  onShowDetail(id: number) {
    this.productService.getProduct(id)
      .subscribe(data => {
        this.toggleProductDetail();
        this.productChosen = data;
      })
  }

  createProduct() {
    const product: CreateProductDTO = {
      title: 'test product',
      price: 13.5,
      image: 'https://i.pravatar.cc',
      description: 'lorem ipsum set',
      category: 'electronic'
    }
    this.productService.createProduct(product)
      .subscribe(data => {
        console.log('created product', data);
        this.products.unshift(data);
      })
  }

  updateProduct() {
    const update: updateProductDTO = {
      title: 'test product updated',
      price: 13.5,
      image: 'https://i.pravatar.cc',
      description: 'lorem ipsum set',
      category: 'electronic'
    }
    const id = this.productChosen.id;
    this.productService.updateProduct(id, update)
      .subscribe(data => {
        const productIndex = this.products.findIndex(item => item.id === this.productChosen.id);
        this.products[productIndex] = data;
        this.productChosen = data;
        console.log('updated product', data, this.productChosen);
      })
  }

  deleteProduct() {
    const id = this.productChosen.id;
    this.productService.deleteProduct(id)
      .subscribe(() => {
        const productIndex = this.products.findIndex(item => item.id === this.productChosen.id);
        this.products.splice(productIndex, 1);
        this.toggleProductDetail();
      });


  }
}
