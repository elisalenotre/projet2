import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Product } from '../product.model';
import { Observable, of } from 'rxjs';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductForm } from '../product-form.model';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit {
  products$: Observable<Product[]> = of([]);
  productForm!: FormGroup;

  constructor(
    private productService: ProductService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.products$ = this.productService.getProducts();

    this.productForm = this.formBuilder.group({
      name: ['', Validators.required],
      price: [null, [Validators.required, Validators.min(0)]],
    });
  }

  addProduct(): void {
    if (this.productForm.valid) {
      const formData: ProductForm = this.productForm.value;

      const newProduct: Product = {
        id: Date.now(),
        name: formData.name,
        price: formData.price,
      };

      this.products$.subscribe((products) => {
        products.push(newProduct);

        this.productService.updateProducts([...products]);

        this.productForm.reset();
      });
    } else {
      this.productForm.markAllAsTouched();
    }
  }
}
