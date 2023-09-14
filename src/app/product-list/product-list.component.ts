import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Product } from '../product.model';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit {
  products$: Observable<Product[]> = of([]);

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.products$ = this.productService.getProducts();
  }

  sortBy(nameOrPrice: 'name' | 'price'): void {
    this.products$.subscribe((products) => {
      products.sort((a, b) => {
        if (nameOrPrice === 'name') {
          return a.name.localeCompare(b.name);
        } else if (nameOrPrice === 'price') {
          if (a.price !== undefined && b.price !== undefined) {
            return a.price - b.price;
          }
          return 0;
        }
        return 0;
      });
      this.productService.updateProducts([...products]);
    });
  }
}
