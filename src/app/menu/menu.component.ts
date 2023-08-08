import { Component, HostListener, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { Router, RouterModule } from '@angular/router';
import { AudioService } from '../_shared/services/audio.service';
import { ProductsService } from '../_shared/services/products.service';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { faCartPlus, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MatDividerModule } from '@angular/material/divider';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [
    CommonModule,
    MatButtonModule,
    RouterModule,
    FontAwesomeModule,
    MatDividerModule,
  ],
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent {
  audioService = inject(AudioService);
  productService = inject(ProductsService);
  currentProduct: number = 1;
  faCartPlus: IconDefinition = faCartPlus;
  faTrash: IconDefinition = faTrash;

  @HostListener('window:keyup', ['$event'])
  keyEvent(event: KeyboardEvent) {
    switch (event.key) {
      case '0':
        this.playAudio();
        break;
      case '1':
        this.callWaiter();
        break;
      case '4':
        this.previousScreen();
        break;
      case '5':
        this.nextScreen();
        break;
      default:
        break;
    }
  }

  constructor(private _router: Router) {}

  playAudio() {
    this.audioService.play('');
  }

  nextScreen() {
    this.audioService.next();
    setTimeout(() => {
      this._router.navigateByUrl('');
    }, 15);
  }

  previousScreen() {
    this.audioService.back();
    setTimeout(() => {
      this._router.navigateByUrl('/bene-arte-cafe');
    }, 15);
  }

  callWaiter() {
    this.audioService.waiter();
  }
}
