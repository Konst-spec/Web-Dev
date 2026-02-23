import {Component, Input, Output, EventEmitter, model} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterOutlet} from '@angular/router';
import {Product} from '../../models/product.model';

@Component({
  selector: 'product-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})

export class ProductCardComponent {
  @Input() product!: Product;
  @Output() delete = new EventEmitter<number>();
  @Output() like = new EventEmitter<number>();

  likeProduct() {
    this.product.likes += 1;
    this.like.emit(this.product.id);
  }
  deleteProduct() {
    this.delete.emit(this.product.id);
  }

  shareOnWhatsApp(event: Event) {
    event.stopPropagation();

    if (!this.product?.link) return;

    const message = `Check out this product: ${this.product.link}`;
    const url = `https://wa.me/?text=${encodeURIComponent(message)}`;

    window.open(url, '_blank');
  }

}
