import { Routes } from '@angular/router';
import { AppComponent } from './app.component';

export const routes: Routes = [
  { path: '**', component: AppComponent }
    // { path: ':lang', component: AppComponent },
    // { path: '**', redirectTo: 'en' }
];
