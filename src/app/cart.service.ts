import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from './DTO/product.dto';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  items: Array<Product> = [];

  constructor(private http: HttpClient) {}

  addToCart(product: Product): void {
    this.items.push(product);
  }

  getItems(): Array<Product> {
    return this.items;
  }

  clearCart(): Array<Product> {
    this.items = [];
    return this.items;
  }

  getShippingPrices(): Observable<any> {
    return this.http.get('/assets/shipping.json');
  }
}
