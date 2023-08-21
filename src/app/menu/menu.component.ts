import { Component, HostListener, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { AudioService } from '../_shared/services/audio.service';
import { ProductsService } from '../_shared/services/products.service';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { faCartPlus, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ActionButtonsComponent } from '../_shared/components/action-buttons/action-buttons.component';
import { CartService } from '../_shared/services/cart.service';
import { Product } from '../_shared/interfaces/product';

@Component({
  selector: 'app-menu',
  standalone: true,
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
  imports: [
    CommonModule,
    MatButtonModule,
    FontAwesomeModule,
    ActionButtonsComponent,
  ],
})
export class MenuComponent {
  audioService = inject(AudioService);
  productService = inject(ProductsService);
  cartService = inject(CartService);
  currentProduct: number = 0;
  faCartPlus: IconDefinition = faCartPlus;
  faTrash: IconDefinition = faTrash;

  @HostListener('window:keyup', ['$event'])
  keyEvent(event: KeyboardEvent) {
    switch (event.key) {
      case '0':
        this.playAudio(
          this.productService.products()[this.currentProduct].audio
        );
        break;
      case '2':
        this.previousProduct();
        break;
      case '3':
        this.nextProduct();
        break;
      case '9':
        this.addProduct(this.productService.products()[this.currentProduct]);
        break;
      case '6':
        break;
      case '7':
        this.removeProduct(
          this.productService.products()[this.currentProduct].id
        );
        break;
      case '8':
        this.audioService.instructions();
        break;
      default:
        break;
    }
  }

  playAudio(audio: string) {
    this.audioService.play(audio);
  }

  previousProduct() {
    if (this.currentProduct > 0) {
      this.currentProduct -= 1;
      this.playAudio(this.productService.products()[this.currentProduct].audio);
    }
  }

  nextProduct() {
    if (this.currentProduct < this.productService.products().length) {
      this.currentProduct += 1;
      this.playAudio(this.productService.products()[this.currentProduct].audio);
    }
  }

  addProduct(product: Product) {
    this.audioService.addToCart();
    this.cartService.add(product);
  }

  removeProduct(id: string) {
    this.audioService.removeFromCart();
    this.cartService.remove(id);
  }
}
