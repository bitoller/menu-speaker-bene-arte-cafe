import { Component, HostListener, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { Router, RouterModule } from '@angular/router';
import { AudioService } from '../_shared/services/audio.service';
import { MatDividerModule } from '@angular/material/divider';

@Component({
  selector: 'app-instructions',
  standalone: true,
  imports: [
    CommonModule,
    MatListModule,
    MatButtonModule,
    RouterModule,
    MatDividerModule,
  ],
  templateUrl: './instructions.component.html',
  styleUrls: ['./instructions.component.scss'],
})
export class InstructionsComponent {
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
    this.audioService.play('./assets/instructions/audio-instructions.mp3');
  }

  nextScreen() {
    this.audioService.next();
    setTimeout(() => {
      this._router.navigateByUrl('/bene-arte-cafe');
    }, 15);
  }

  previousScreen() {
    this.audioService.back();
    setTimeout(() => {
      this._router.navigateByUrl('/home');
    }, 15);
  }

  callWaiter() {
    this.audioService.waiter();
  }
}
