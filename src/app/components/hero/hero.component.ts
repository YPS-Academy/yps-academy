import { Component, signal, computed, effect, HostListener } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss'],
  standalone: true,
})
export class HeroComponent {
  title = signal('Welcome to YPS Academy');
   fullText = signal('We chase the knowledge and Make the Success to Chase Us');
   currentIndex = signal(0);
   isMobile = signal(window.innerWidth <= 768);

  displayText = computed(() => 
    this.fullText().substring(0, this.currentIndex())
  );

  constructor() {
    effect(() => {
      if (!this.isMobile()) {
        const interval = setInterval(() => {
          if (this.currentIndex() < this.fullText().length) {
            this.currentIndex.update(i => i + 1);
          } else {
            clearInterval(interval);
          }
        }, 100);
      }
    });
  }

  @HostListener('window:resize')
  onResize() {
    this.isMobile.set(window.innerWidth <= 768);
  }
}
