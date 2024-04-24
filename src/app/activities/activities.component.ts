import { Component } from '@angular/core';
import { CarouselCycleComponent } from "../carousel-cycle/carousel-cycle.component";

@Component({
    selector: 'app-activities',
    standalone: true,
    templateUrl: './activities.component.html',
    styleUrls: ['./activities.component.scss', '../page.scss'],
    imports: [CarouselCycleComponent]
})
export class ActivitiesComponent {
 
}
