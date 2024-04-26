import { Component, Input, OnInit } from '@angular/core';
import { CarouselCycleComponent } from "../carousel-cycle/carousel-cycle.component";
import { FullImgComponent } from "../full-img/full-img.component";
import { NgFor, NgIf } from "@angular/common";
import { CarouselFaderComponent } from "../carousel-fader/carousel-fader.component";
import { JsonLoaderService } from '../json-loader.service';
import { RouterModule } from '@angular/router';

@Component({
    selector: 'app-activities',
    standalone: true,
    templateUrl: './activities.component.html',
    styleUrls: ['./activities.component.scss', '../page.scss'],
    imports: [CarouselCycleComponent, FullImgComponent, NgFor, NgIf, CarouselFaderComponent, RouterModule],
    providers: [RouterModule]
})
export class ActivitiesComponent implements OnInit {
    @Input() src: any;
    
    public content: any;

    constructor(private jsonLoaderService: JsonLoaderService) { }
  
    async ngOnInit() {
      this.content = await this.jsonLoaderService.loadJson(this.src);
    }
}
