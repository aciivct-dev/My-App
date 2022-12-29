import { Product } from './product';
import { Pipe, PipeTransform } from '@angular/core';
import { Component, InjectionToken } from '@angular/core';
import { ProductService } from './product.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  product_service = new InjectionToken<ProductService>('product_service');
  products: Product[] = [];
  productService;
  constructor() {
    this.productService = new ProductService();
  }
  getProducts() {
    this.products = this.productService.getProducts();
  }
}
