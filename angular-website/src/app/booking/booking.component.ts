import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-booking',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.scss'],
})
export class BookingComponent {
  @Input() src: string | undefined;

  heading = 'Make a Booking at Nashipae Cultural Oasis';
  selectedPlanIndex: number | null = null; // Track the selected plan

  plans = [
    {
      title: 'Basic Plan',
      description: 'Includes;',
      features: ['Free WiFi', '4x6 Bed', 'Hot Shower', 'Breakfast'],
      image: 'https://via.placeholder.com/300x200',
    },
    {
      title: 'Standard Plan',
      description: 'Includes;',
      features: ['Free WiFi', '5x6 Bed', 'Hot Shower', 'Breakfast'],
      image: 'https://via.placeholder.com/300x200',
    },
    {
      title: 'Premium Plan',
      description: 'Includes;',
      features: [
        'Free WiFi',
        'King-size Bed (6x6)',
        'Hot Shower',
        'Breakfast',
        'Lunch + Dinner',
        'Laundry',
      ],
      image: 'https://via.placeholder.com/300x200',
    },
    {
      title: 'Full House',
      description: 'Includes;',
      features: [
        'All three bedrooms',
        'Kitchen',
        'Seating Area',
        'Dining Area',
        'All Premium features',
      ],
      image: 'https://via.placeholder.com/300x200',
    },
  ];

  // Function to select a plan
  selectPlan(index: number) {
    this.selectedPlanIndex = index;
  }
}