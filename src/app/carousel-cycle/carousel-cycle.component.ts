import { Component, ContentChild, Input, NgZone, OnInit, TemplateRef, ViewEncapsulation } from '@angular/core';
import { FullScreen } from '../fullscreen.service';
import { CommonModule, NgFor } from '@angular/common';

@Component({
  selector: 'app-carousel-cycle',
  standalone: true,
  imports: [CommonModule, NgFor],
  templateUrl: './carousel-cycle.component.html',
  styleUrl: './carousel-cycle.component.scss',
  encapsulation: ViewEncapsulation.None
})
export class CarouselCycleComponent implements OnInit {
  @Input() items!: any[];
  @ContentChild(TemplateRef) template!: TemplateRef<any>;


  constructor(private ngZone: NgZone, private fullScreen: FullScreen) {}
  ngOnInit(): void {
    this.ngZone.runOutsideAngular(() => {
      setInterval(() => {
        this.ngZone.run(() => {
          this.cycleForeground();
        });
      }, 5000);
    });
  }
  public i: number = 0;
  public interval: any;
  public me: any;
  public noTransition = false;
  public shake = false;

  public cycleForegroundActive = true;

  cycleForeground() {

    if(this.fullScreen.isFullScreen || !this.cycleForegroundActive) return;
    
    var cyclingLogic = () => {
      this.i = (this.i + 1) % 4;
      if(this.i == 0) {
        this.noTransition = true;
        setTimeout(() => {
          this.i++;
          this.noTransition = false;
        }, 1);
      }
    };

    // apply shake effect
    this.shake = true;
    setTimeout(() => this.shake = false, 500);

    // run cycling logic after one second
    setTimeout(() => cyclingLogic(), 1000);
  }
}
