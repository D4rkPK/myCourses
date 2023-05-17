import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product, CreateProductDTO, updateProductDTO } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private apiUrl = 'https://fakestoreapi.com/products';

  constructor(
    private http: HttpClient,
  ) { }

  getAllProducts() {
    return this.http.get<Product[]>(this.apiUrl);
  }

  getProduct(id: number) {
    return this.http.get<Product>(`${this.apiUrl}/${id}`);
  }

  createProduct(dto: CreateProductDTO) {
    return this.http.post<Product>(this.apiUrl, dto);
  }

  updateProduct(id: number, dto: updateProductDTO) {
    return this.http.put<Product>(`${this.apiUrl}/${id}`, dto);
  }

  deleteProduct(id: number) {
    return this.http.delete<boolean>(`${this.apiUrl}/${id}`);
  }

}
