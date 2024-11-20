import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

interface Language {
  code: string;
  name: string;
}

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  private languageSubject = new BehaviorSubject<Language>({ code: 'en', name: 'English' });
  public currentLanguage = this.languageSubject.asObservable();

  constructor() {}

  changeLanguage(language: Language) {
    this.languageSubject.next(language);
    // Optionally, persist the language setting in local storage or a cookie
  }
}