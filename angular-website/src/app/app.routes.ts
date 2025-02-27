import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ActivitiesComponent } from './activities/activities.component';
import { BookingComponent } from './booking/booking.component';
import { ContactComponent } from './contact/contact.component';
import { MealsComponent } from './meals/meals.component';
import { RoomsComponent } from './rooms/rooms.component';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' }, // Default route
  { path: 'home', component: HomeComponent },
  { path: 'activities', component: ActivitiesComponent },
  { path: 'booking', component: BookingComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'meals', component: MealsComponent },
  { path: 'rooms', component: RoomsComponent },
  { path: '**', redirectTo: 'home' } // Fallback for unknown routes
];