import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../services/products.service';
import { Product } from '../services/products.module';
import { AlertController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.page.html',
  styleUrls: ['./products.page.scss'],
})
export class ProductsPage implements OnInit {
  products: Product[] = [];
  selectedProduct: Product | null = null;
  isClosing: boolean = false;
  selectedCategory!: 'drinks' | 'foods';
  videoSource!: string;

  constructor(
    private productsService: ProductsService,
    private alertController: AlertController,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.selectedCategory = params['category'] as 'drinks' | 'foods';
      this.products = this.productsService.getProductsByCategory(this.selectedCategory);
      this.videoSource = this.selectedCategory === 'drinks' ? 'assets/videos/bubbles.mp4' : 'assets/videos/smoke.mp4';
    });
  }

  selectProduct(product: Product) {
    this.selectedProduct = product;
    this.isClosing = false;
  }

  closeModal() {
    this.isClosing = true;
    setTimeout(() => {
      this.selectedProduct = null;
    }, 300);
  }

  async addToCart(product: Product | null, event: any) {
    if (product) {
      const alert = await this.alertController.create({
        header: 'Success',
        message: `${product.name} has been added to your cart.`,
        buttons: ['OK']
      });

      await alert.present();

      const button = event.currentTarget;
      button.classList.add('clicked');

      setTimeout(() => {
        button.classList.remove('clicked');
      }, 1000); // 1 second delay

      this.closeModal();
    }
  }
}
