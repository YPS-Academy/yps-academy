import { Component, signal } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dev-progress-message',
  templateUrl: './dev-progress-message.component.html',
  styleUrls: ['./dev-progress-message.component.scss'],
  standalone: true,
  imports: [CommonModule, MatIconModule, MatButtonModule]
})
export class DevProgressMessageComponent {
  showBanner = signal(true);

  dismissBanner() {
    this.showBanner.set(false);
  }
}
