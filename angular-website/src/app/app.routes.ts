import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ActivitiesComponent } from './activities/activities.component';
import { BookingComponent } from './booking/booking.component';
import { ContactComponent } from './contact/contact.component';
import { MealsComponent } from './meals/meals.component';
import { RoomsComponent } from './rooms/rooms.component'; // Removed MenuComponent

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' }, // Default route
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'activities', component: ActivitiesComponent },
  { path: 'booking', component: BookingComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'meals', component: MealsComponent },
  { path: 'rooms', component: RoomsComponent }, // Removed MenuComponent route
  { path: '**', redirectTo: 'home' } // Fallback for unknown routes
];