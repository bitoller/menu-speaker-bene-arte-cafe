import { Component, HostListener, Input, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { Router, RouterModule } from '@angular/router';
import { AudioService } from '../../services/audio.service';

@Component({
  selector: 'app-action-buttons',
  standalone: true,
  imports: [CommonModule, MatDividerModule, MatButtonModule, RouterModule],
  templateUrl: './action-buttons.component.html',
  styleUrls: ['./action-buttons.component.scss'],
})
export class ActionButtonsComponent {
  audioService = inject(AudioService);

  @Input({ required: true }) previousUrl: string = '';
  @Input({ required: true }) nextUrl: string = '';
  @HostListener('window:keyup', ['$event'])
  keyEvent(event: KeyboardEvent) {
    switch (event.key) {
      case '1':
        this.callWaiter();
        break;
      case '4':
        this.previousScreen();
        break;
      case '5':
        if (this.nextUrl != '/') {
          this.nextScreen();
        }
        break;
      case '6':
        if (this.nextUrl != '/') {
          this.finishOrder();
        }
        break;
      default:
        break;
    }
  }

  constructor(private _router: Router) {}

  nextScreen() {
    if (this.nextUrl == '/cart') {
      this.finishOrder();
    } else {
      this.audioService.next();
      setTimeout(() => {
        this._router.navigateByUrl(this.nextUrl);
      }, 15);
    }
  }

  previousScreen() {
    this.audioService.back();
    setTimeout(() => {
      this._router.navigateByUrl(this.previousUrl);
    }, 15);
  }

  callWaiter() {
    this.audioService.waiter();
  }

  finishOrder() {
    if (this.nextUrl == '/cart') {
      this.audioService.finishOrder();
      setTimeout(() => {
        this._router.navigateByUrl(this.nextUrl);
      }, 15);
    }
  }
}
