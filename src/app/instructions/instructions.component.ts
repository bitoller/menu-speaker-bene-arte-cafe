import { Component, HostListener, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatListModule } from '@angular/material/list';
import { AudioService } from '../_shared/services/audio.service';
import { ActionButtonsComponent } from '../_shared/components/action-buttons/action-buttons.component';

@Component({
  selector: 'app-instructions',
  standalone: true,
  imports: [CommonModule, MatListModule, ActionButtonsComponent],
  templateUrl: './instructions.component.html',
  styleUrls: ['./instructions.component.scss'],
})
export class InstructionsComponent {
  audioService = inject(AudioService);
  @HostListener('window:keyup', ['$event'])
  keyEvent(event: KeyboardEvent) {
    switch (event.key) {
      case '0':
      case '8':
        this.audioService.instructions();
        break;
      default:
        break;
    }
  }
}
