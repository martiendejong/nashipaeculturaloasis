import { Component, NgZone, OnInit } from '@angular/core';
import { FullImgComponent } from '../full-img/full-img.component';
import { FullScreen } from '../fullscreen.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FullImgComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss', '../page.scss']
})
export class HomeComponent implements OnInit {
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
