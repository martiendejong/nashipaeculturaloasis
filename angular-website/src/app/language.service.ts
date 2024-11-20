import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  private languageSubject = new BehaviorSubject<{ code: string, name: string }>({ code: 'en', name: 'English' });
  currentLanguage = this.languageSubject.asObservable();

  changeLanguage(language: { code: string; name: string }) {
    this.languageSubject.next(language);
  }
}