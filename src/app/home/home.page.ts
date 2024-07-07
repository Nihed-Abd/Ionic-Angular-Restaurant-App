import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss']
})
export class HomePage implements OnInit {
  products = [
    {
      name: 'Pizza Margherita',
      description: 'Classic pizza with tomatoes and mozzarella',
      image: 'assets/images/pizza.jpg'
    },
    {
      name: 'Spaghetti Carbonara',
      description: 'Pasta with eggs, cheese, pancetta, and pepper',
      image: 'assets/images/SpaghettiCarbonara.jpeg'
    },
    {
      name: 'Tiramisu',
      description: 'Coffee-flavoured Italian dessert',
      image: 'assets/images/Tiramisu.jpg'
    }
  ];

  activeProduct: any;
  productIndex: number = 0;
  isMuted: boolean = true;

  constructor(private router: Router) {}

  ngOnInit() {
    this.startProductRotation();
  }

  startProductRotation() {
    this.activeProduct = this.products[this.productIndex];
    setInterval(() => {
      this.productIndex = (this.productIndex + 1) % this.products.length;
      this.activeProduct = this.products[this.productIndex];
    }, 3000);
  }

  navigateToProducts() {
    this.router.navigate(['/products']);
  }

  toggleVideoSound(videoElement: HTMLVideoElement) {
    this.isMuted = !this.isMuted;
    videoElement.muted = this.isMuted;
  }
}
