import { Component, HostListener, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatListModule } from '@angular/material/list';
import { CartService } from '../_shared/services/cart.service';
import { AudioService } from '../_shared/services/audio.service';
import { MatButtonModule } from '@angular/material/button';
import { Router, RouterModule } from '@angular/router';
import { ActionButtonsComponent } from "../_shared/components/action-buttons/action-buttons.component";

@Component({
    selector: 'app-cart',
    standalone: true,
    templateUrl: './cart.component.html',
    styleUrls: ['./cart.component.scss'],
    imports: [CommonModule, MatListModule, MatButtonModule, RouterModule, ActionButtonsComponent]
})
export class CartComponent implements OnInit {
  cartService = inject(CartService);
  total: number = 0;

  ngOnInit(): void {
    this.cartService.cartList().forEach((item) => {
      this.total += item.price * item.amount!;
    });
  }

  audioService = inject(AudioService);
  @HostListener('window:keyup', ['$event'])
  keyEvent(event: KeyboardEvent) {
    switch (event.key) {
      case '4':
        this.previousScreen();
        break;
      default:
        break;
    }
  }

  constructor(private _router: Router) {}

  previousScreen() {
    this.audioService.back();
    setTimeout(() => {
      this._router.navigateByUrl('/menu');
    }, 15);
  }
}
