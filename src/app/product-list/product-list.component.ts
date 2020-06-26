import { Component } from '@angular/core';
import { Product } from '../DTO/product.dto';
import { products } from '../products';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent {
  products: Array<Product> = products;

  share(productName: string): void {
    window.alert('공유햇음' + productName);
    return;
  }

  onNotify(productName: string): void {
    window.alert('노티 받았음' + productName);
    return;
  }
}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
