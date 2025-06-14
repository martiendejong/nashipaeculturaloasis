import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-rooms',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss']
})
export class RoomsComponent implements OnInit {
  expandedRooms = {
    bedroom1: false,
    bedroom2: false,
    livingroom: false,
    veranda: false
  };

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    // Check for fragment in URL and expand the corresponding room
    this.route.fragment.subscribe(fragment => {
      if (fragment && this.expandedRooms.hasOwnProperty(fragment)) {
        this.expandedRooms[fragment as keyof typeof this.expandedRooms] = true;
        // Scroll to the room
        const element = document.getElementById(fragment);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    });
  }

  toggleRoom(roomId: string) {
    this.expandedRooms[roomId as keyof typeof this.expandedRooms] = !this.expandedRooms[roomId as keyof typeof this.expandedRooms];
  }
}
