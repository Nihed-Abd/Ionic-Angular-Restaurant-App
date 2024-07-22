// src/app/services/products.service.ts
import { Injectable } from '@angular/core';
import { Product } from './products.module';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private products: Product[] = [
    { id: 1, name: 'Pizza Margherita', price: 8.99, priceDiscount: 0, description: 'Classic pizza with tomatoes and mozzarella', image: 'assets/images/pizza.jpg', category: 'foods', hasDiscount: false },
    { id: 2, name: 'Spaghetti Carbonara', price: 10.99, priceDiscount: 0, description: 'Pasta with eggs, cheese, pancetta, and pepper', image: 'assets/images/SpaghettiCarbonara.jpeg', category: 'foods', hasDiscount: false },
    { id: 3, name: 'Tiramisu', price: 5.99, priceDiscount: 0, description: 'Coffee-flavoured Italian dessert', image: 'assets/images/Tiramisu.jpg', category: 'foods', hasDiscount: false },
    { id: 4, name: 'Vodka absolut 4 CL', price: 17, priceDiscount: 12.99, description: 'Une vodka haut de gamme, produite à partir de blé dhiver suédois et deau de source. Elle est souvent consommée pure, avec des glaçons ou en cocktail.', image: 'assets/images/vodka.jpeg', category: 'drinks', hasDiscount: true },
    { id: 5, name: 'Martini Rouge 5 CL', price: 10, priceDiscount: 0, description: 'un vermouth rouge, plus sucré que le blanc, avec une saveur légèrement amère.', image: 'assets/images/martiniRouge.jpeg', category: 'drinks', hasDiscount: false },
    { id: 6, name: 'Johnnie Walker 4 CL', price: 26, priceDiscount: 19.99, description: 'Johnnie Walker Black Label 4cl', image: 'assets/images/jhonnyWalker.jpeg', category: 'drinks', hasDiscount: true }
 ];

  constructor() { }

  getProducts(): Product[] {
    return this.products;
  }

  getProductsByCategory(category: 'drinks' | 'foods'): Product[] {
    return this.products.filter(product => product.category === category);
  }
}
