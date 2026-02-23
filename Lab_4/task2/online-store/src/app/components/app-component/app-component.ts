import { Component, inject, signal } from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterOutlet} from '@angular/router';
import {ProductListComponent} from '../product-list/product-list.component';
import {ProductService} from '../../services/product-service';
import {Product} from '../../models/product.model';

@Component({
  selector: 'app-app-component',
  imports: [CommonModule, RouterOutlet, ProductListComponent],
  templateUrl: './app-component.html',
  styleUrl: './app-component.css',
  standalone: true
})
export class AppComponent {
  private productService = inject(ProductService);

  categories = this.productService.getCategories();
  selectedCategory = signal<number | null>(null);
  products = signal<Product[]>([]);

  selectCategory(id: number) {
    this.selectedCategory.set(id);
    this.products.set(
      this.productService.getProductsByCategory(id)
    );
  }
  onDeleteProduct(id: number) {
    this.products.update(list => list.filter(p => p.id !== id));
  }
}
