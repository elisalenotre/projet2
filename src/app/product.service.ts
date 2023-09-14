import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Product } from './product.model';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private products: Product[] = [
    { id: 1, name: 'Produit 1', price: 10 },
    { id: 2, name: 'Produit 2', price: 20 },
    { id: 3, name: 'Produit 3', price: 30 },
  ];

  private productsSubject = new Subject<Product[]>();

  constructor() {}

  getProducts(): Observable<Product[]> {
    return this.productsSubject.asObservable();
  }

  updateProducts(newProducts: Product[]): void {
    this.products = newProducts;
    this.productsSubject.next(newProducts);
  }
}
