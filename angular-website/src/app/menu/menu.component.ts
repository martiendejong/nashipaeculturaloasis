import { Component, HostListener, OnInit } from '@angular/core';
import { Scroll } from '../scroll.service';
import { RouterModule } from '@angular/router';
import { NgFor, NgIf } from '@angular/common';
import { LanguageService } from '../language.service';

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
    { code: 'nl', name: 'Nederlands' },
    { code: 'fr', name: 'Francais' },
    { code: 'de', name: 'Deutsch' }
  ];
  public selectedLanguage = { code: 'en', name: 'English' };

  constructor(public scroll: Scroll, private languageService: LanguageService) {
    this.languageService.currentLanguage.subscribe(language => this.selectedLanguage = language);
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

  changeLanguage(language: any) {
    this.selectedLanguage = language;
    this.showLanguageMenu = false;
    this.languageService.changeLanguage(language);
  }
}