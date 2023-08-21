import { Component, HostListener, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AudioService } from '../_shared/services/audio.service';
import { ActionButtonsComponent } from '../_shared/components/action-buttons/action-buttons.component';

@Component({
  selector: 'app-bene-arte-cafe',
  standalone: true,
  imports: [CommonModule, ActionButtonsComponent],
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
      case '8':
        this.audioService.instructions();
        break;
      default:
        break;
    }
  }

  playAudio() {
    this.audioService.play('./assets/bene/audio-bene.mp3');
  }
}
