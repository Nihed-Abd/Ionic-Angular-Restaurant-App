// src/app/services/products.service.ts
import { Injectable } from '@angular/core';
import { Product } from './products.module';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private products: Product[] = [
    { id: 1, name: 'Pizza Margherita', price: 8.99, description: 'Classic pizza with tomatoes and mozzarella', image: 'assets/images/pizza.jpg' },
    { id: 2, name: 'Spaghetti Carbonara', price: 10.99, description: 'Pasta with eggs, cheese, pancetta, and pepper', image: 'assets/images/SpaghettiCarbonara.jpeg' },
    { id: 3, name: 'Tiramisu', price: 5.99, description: 'Coffee-flavoured Italian dessert', image: 'assets/images/Tiramisu.jpg' },
    { id: 4, name: 'Pizza Margherita', price: 8.99, description: 'Classic pizza with tomatoes and mozzarella', image: 'assets/images/pizza.jpg' },
    { id: 5, name: 'Spaghetti Carbonara', price: 10.99, description: 'Pasta with eggs, cheese, pancetta, and pepper', image: 'assets/images/SpaghettiCarbonara.jpeg' },
    { id: 6, name: 'Tiramisu', price: 5.99, description: 'Coffee-flavoured Italian dessert', image: 'assets/images/Tiramisu.jpg' }
  ];

  constructor() { }

  getProducts(): Product[] {
    return this.products;
  }
}
