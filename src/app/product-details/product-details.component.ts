import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../DTO/product.dto';
import { products } from '../products';
import { CartService } from './../cart.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
})
export class ProductDetailsComponent implements OnInit {
  product: Product;

  constructor(
    private route: ActivatedRoute,
    private cartService: CartService
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      // 여기 +는 뭘까?
      this.product = products[+params.get('productId')];
    });
  }

  addToCart(product: Product) {
    this.cartService.addToCart(product);
    console.log('카트에 담았음', product.name);
  }
}
