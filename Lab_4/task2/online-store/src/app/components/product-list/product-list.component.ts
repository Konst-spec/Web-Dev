import {Component, computed, Input, Output, EventEmitter, SimpleChanges, signal} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterOutlet} from '@angular/router';
import {Product} from '../../models/product.model';
import {ProductCardComponent} from '../product-card/product-card.component';
import {FormsModule} from '@angular/forms';
import { ProductService } from '../../services/product-service';

@Component({
  selector: 'product-list',
  standalone: true,
  imports: [CommonModule, RouterOutlet, ProductCardComponent, FormsModule],
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})

export class ProductListComponent {
  @Input() products: Product[] = [];
  @Output() delete = new EventEmitter<number>();

  search: string = '';
  filteredProducts: Product[] = [];

  ngOnChanges(changes: SimpleChanges) {
    if (changes['products']) {
      this.filteredProducts = [...this.products];
    }
  }

  filterProducts() {
    const term = this.search.toLowerCase();
    this.filteredProducts = this.products.filter(product =>
      product.name.toLowerCase().includes(term)
    );
  }

  onDelete(id: number) {
    this.products = this.products.filter(p => p.id !== id);

    this.delete.emit(id);
  }
}
