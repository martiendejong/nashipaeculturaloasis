import { Component, ContentChild, Input, NgZone, OnInit, TemplateRef, ViewEncapsulation } from '@angular/core';
import { FullScreen } from '../fullscreen.service';
import { CommonModule, NgFor } from '@angular/common';

@Component({
  selector: 'app-carousel-fader',
  standalone: true,
  imports: [CommonModule, NgFor],
  templateUrl: './carousel-fader.component.html',
  styleUrl: './carousel-fader.component.scss',
  encapsulation: ViewEncapsulation.None
})
export class CarouselFaderComponent implements OnInit {
  @Input() items!: any[];
  @ContentChild(TemplateRef) template!: TemplateRef<any>;

  constructor(private ngZone: NgZone, private fullScreen: FullScreen) {}
  ngOnInit(): void {
    this.ngZone.runOutsideAngular(() => {
      setInterval(() => {
        this.ngZone.run(() => {
          this.cycle();
        });
      }, 5000);
    });
  }

  public i: number = 0;
  public interval: any;

  public cycleActive = true;

  cycle() {
    if(this.fullScreen.isFullScreen || !this.cycleActive) return;
    var next = (this.i + 1) % this.items.length;
    this.i = -1;
    setTimeout(() => this.i = next, 500);
  }
}
