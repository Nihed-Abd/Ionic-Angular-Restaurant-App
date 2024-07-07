import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../services/products.service';
import { Product } from '../services/products.module';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-products',
  templateUrl: './products.page.html',
  styleUrls: ['./products.page.scss'],
})
export class ProductsPage implements OnInit {

  products: Product[] = [];
  selectedProduct: Product | null = null;
  isClosing: boolean = false;

  constructor(
    private productsService: ProductsService,
    private alertController: AlertController
  ) { }

  ngOnInit() {
    this.products = this.productsService.getProducts();
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

  async addToCart(product: Product | null) {
    if (product) {
      const alert = await this.alertController.create({
        header: 'Success',
        message: `${product.name} has been added to your cart.`,
        buttons: ['OK']
      });

      await alert.present();
      this.closeModal();
    }
  }
}
