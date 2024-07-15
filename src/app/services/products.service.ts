// src/app/services/products.service.ts
import { Injectable } from '@angular/core';
import { Product } from './products.module';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private products: Product[] = [
    { id: 1, name: 'Pizza Margherita', price: 8.99, description: 'Classic pizza with tomatoes and mozzarella', image: 'assets/images/pizza.jpg', category: 'foods' },
    { id: 2, name: 'Spaghetti Carbonara', price: 10.99, description: 'Pasta with eggs, cheese, pancetta, and pepper', image: 'assets/images/SpaghettiCarbonara.jpeg', category: 'foods' },
    { id: 3, name: 'Tiramisu', price: 5.99, description: 'Coffee-flavoured Italian dessert', image: 'assets/images/Tiramisu.jpg', category: 'foods' },
    { id: 4, name: 'Cocktail', price: 6.99, description: 'Refreshing cocktail with fruits', image: 'assets/images/cocktail.jpg', category: 'drinks' },
    { id: 5, name: 'Latte', price: 4.99, description: 'Creamy latte coffee', image: 'assets/images/latte.jpg', category: 'drinks' },
    { id: 6, name: 'Smoothie', price: 5.99, description: 'Healthy fruit smoothie', image: 'assets/images/smoothie.jpg', category: 'drinks' }
  ];

  constructor() { }

  getProducts(): Product[] {
    return this.products;
  }

  getProductsByCategory(category: 'drinks' | 'foods'): Product[] {
    return this.products.filter(product => product.category === category);
  }
}
