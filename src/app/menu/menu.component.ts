import { Component, HostListener, OnInit } from '@angular/core';
import { Scroll } from '../scroll.service';
import { RouterModule, provideRouter } from '@angular/router';
import { routes } from '../app.routes';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss',
  providers: [Scroll, RouterModule]
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