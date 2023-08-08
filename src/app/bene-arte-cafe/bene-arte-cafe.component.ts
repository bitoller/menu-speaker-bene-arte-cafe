import { Component, HostListener, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { Router, RouterModule } from '@angular/router';
import { AudioService } from '../_shared/services/audio.service';
import { MatDividerModule } from '@angular/material/divider';

@Component({
  selector: 'app-bene-arte-cafe',
  standalone: true,
  imports: [CommonModule, MatButtonModule, RouterModule, MatDividerModule],
  templateUrl: './bene-arte-cafe.component.html',
  styleUrls: ['./bene-arte-cafe.component.scss'],
})
export class BeneArteCafeComponent {
  audioService = inject(AudioService);
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
    this.audioService.play('./assets/bene/audio-bene.mp3');
  }

  nextScreen() {
    this.audioService.next();
    setTimeout(() => {
      this._router.navigateByUrl('/menu');
    }, 15);
  }

  previousScreen() {
    this.audioService.back();
    setTimeout(() => {
      this._router.navigateByUrl('/instructions');
    }, 15);
  }

  callWaiter() {
    this.audioService.waiter();
  }
}
