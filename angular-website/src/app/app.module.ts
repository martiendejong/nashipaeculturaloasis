import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router'; // Import RouterModule

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ActivitiesComponent } from './activities/activities.component';
import { BookingComponent } from './booking/booking.component';
import { ContactComponent } from './contact/contact.component';
import { MealsComponent } from './meals/meals.component';
import { RoomsComponent } from './rooms/rooms.component';

import { routes } from './app.routes'; // Import your routes

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent, // Removed AboutComponent
    ActivitiesComponent,
    BookingComponent,
    ContactComponent,
    MealsComponent,
    RoomsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes) // Add RouterModule with your routes
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }