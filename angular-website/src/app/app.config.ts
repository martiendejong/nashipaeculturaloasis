import { ApplicationConfig, InjectionToken } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { HttpClient, HttpClientModule, HttpHandler, provideHttpClient, withFetch } from '@angular/common/http';

// Define a token for injecting the default language
export const DEFAULT_LANGUAGE = new InjectionToken<string>('DefaultLanguage');

// Get the default language from local settings
const navigatorLanguage = 'en';// typeof navigator !== 'undefined' ? navigator.language.slice(0, 2) : 'en';
const defaultLanguage = ['en', 'fr', 'de'].includes(navigatorLanguage) ? navigatorLanguage : 'en';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideClientHydration(),
    provideHttpClient(withFetch()),
    { provide: DEFAULT_LANGUAGE, useValue: defaultLanguage }
  ]
};
