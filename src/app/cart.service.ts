import { Injectable } from '@angular/core';
import { Product } from './DTO/product.dto';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  items: Array<Product> = [];

  constructor() {}

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
}
