import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from '../DTO/product.dto';

@Component({
  selector: 'app-product-alerts',
  templateUrl: './product-alerts.component.html',
  styleUrls: ['./product-alerts.component.css'],
})
export class ProductAlertsComponent implements OnInit {
  @Input()
  product: Product;

  @Output()
  notiEventEmitter = new EventEmitter();

  constructor() {}

  ngOnInit() {}
}
