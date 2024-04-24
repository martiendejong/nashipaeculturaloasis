import { Component, Input } from '@angular/core';
import { FullScreen } from '../fullscreen.service';

@Component({
  selector: 'app-full-img',
  standalone: true,
  imports: [],
  templateUrl: './full-img.component.html',
  styleUrl: './full-img.component.scss'
})
export class FullImgComponent {
  constructor(public fullScreen: FullScreen) {}
  @Input() src!: string;
}
