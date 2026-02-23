import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Product } from './models/product.model';
import {CommonModule} from '@angular/common';
import {ProductCardComponent} from './components/product-card/product-card.component';
import {ProductListComponent} from './components/product-list/product-list.component';
import {AppComponent} from './components/app-component/app-component';

@Component({
  selector: 'app-root',
  imports: [CommonModule, RouterOutlet, ProductCardComponent, ProductListComponent, AppComponent],
  templateUrl: './app.html',
  standalone: true,
  styleUrl: './app.css'
})
export class App {

}
