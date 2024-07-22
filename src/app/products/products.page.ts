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
  filteredProducts: Product[] = [];
  selectedProduct: Product | null = null;
  isClosing: boolean = false;
  selectedCategory!: 'drinks' | 'foods';
  videoSource!: string;
  searchQuery: string = '';

  constructor(
    private productsService: ProductsService,
    private alertController: AlertController,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.selectedCategory = params['category'] as 'drinks' | 'foods';
      this.loadProducts();
      this.videoSource = this.selectedCategory === 'drinks' ? 'assets/vds/bubbles.mp4' : 'assets/vds/smoke.mp4';
    });
  }

  loadProducts() {
    this.products = this.productsService.getProductsByCategory(this.selectedCategory);
    this.filteredProducts = this.products;
  }

  filterProducts() {
    if (this.searchQuery) {
      this.filteredProducts = this.products.filter(product =>
        product.name.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
    } else {
      this.filteredProducts = this.products;
    }
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

  getProductPrice(product: Product | null): string {
    if (!product) return '';
    return product.priceDiscount > 0 ? `${product.priceDiscount}` : `${product.price}`;
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
