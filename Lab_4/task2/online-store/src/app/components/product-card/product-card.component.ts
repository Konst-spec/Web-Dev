import {Component, Input} from '@angular/core';
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
  shareOnWhatsApp(event: Event) {
    event.stopPropagation();

    if (!this.product?.link) return;

    const message = `Check out this product: ${this.product.link}`;
    const url = `https://wa.me/?text=${encodeURIComponent(message)}`;

    window.open(url, '_blank');
  }

}
