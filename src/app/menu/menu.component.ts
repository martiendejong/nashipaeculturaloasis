import { Component, HostListener, OnInit } from '@angular/core';
import { Scroll } from '../scroll.service';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss',
  providers: [Scroll]
})
export class MenuComponent implements OnInit {
  constructor(public scroll: Scroll) {
  }
  ngOnInit(): void {
    this.scroll.onWindowScroll();
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.scroll.onWindowScroll();
  }
}