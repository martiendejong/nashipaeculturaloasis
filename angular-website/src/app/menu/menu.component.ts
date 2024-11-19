import { Component, HostListener, OnInit } from '@angular/core';
import { Scroll } from '../scroll.service';
import { RouterModule, provideRouter } from '@angular/router';
import { routes } from '../app.routes';
import { NgFor, NgIf }from '@angular/common';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [RouterModule, NgFor, NgIf],
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
  providers: [Scroll, RouterModule]
})
export class MenuComponent implements OnInit {
  public showLanguageMenu: boolean = false;
  public languages = [
    { code: 'en', name: 'English' },
    { code: 'fr', name: 'French' },
    { code: 'de', name: 'German' }
  ];
  public selectedLanguage: string;

  constructor(public scroll: Scroll) {
    this.selectedLanguage = 'en';// navigator !== undefined ? navigator.language.slice(0, 2) : 'en';
  }

  ngOnInit(): void {
    this.scroll.onWindowScroll();
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.scroll.onWindowScroll();
  }

  toggleLanguageMenu() {
    this.showLanguageMenu = !this.showLanguageMenu;
  }

  changeLanguage(languageCode: string) {
    this.selectedLanguage = languageCode;
    this.showLanguageMenu = false;
    // Logic to change the language settings goes here.
  }
}
