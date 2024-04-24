import { Component, ViewChild } from '@angular/core';
import { FullImgComponent } from '../full-img/full-img.component';
import { CarouselCycleComponent } from "../carousel-cycle/carousel-cycle.component";
import { NgFor, NgIf }from '@angular/common';

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss', '../page.scss'],
    imports: [FullImgComponent, CarouselCycleComponent, NgFor, NgIf]
})
export class HomeComponent {
  @ViewChild(CarouselCycleComponent) carousel!: CarouselCycleComponent;
}
