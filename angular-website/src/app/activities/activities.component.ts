import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { CarouselCycleComponent } from "../carousel-cycle/carousel-cycle.component";
import { FullImgComponent } from "../full-img/full-img.component";
import { NgFor, NgIf, NgClass } from "@angular/common";
import { CarouselFaderComponent } from "../carousel-fader/carousel-fader.component";
import { JsonLoaderService } from '../json-loader.service';
import { Subscription } from 'rxjs';
import { LanguageService } from '../language.service';
import { RouterModule } from '@angular/router';

@Component({
    selector: 'app-activities',
    standalone: true,
    templateUrl: './activities.component.html',
    styleUrls: ['./activities.component.scss', '../page.scss'],
    imports: [CarouselCycleComponent, FullImgComponent, NgFor, NgIf, NgClass, CarouselFaderComponent, RouterModule],
    providers: [RouterModule]
})
export class ActivitiesComponent implements OnInit, OnDestroy {
    @Input() src: any;
    
    public content: any;
    private languageSubscription: Subscription;

    constructor(private jsonLoaderService: JsonLoaderService, private languageService: LanguageService) {
      this.languageSubscription = this.languageService.currentLanguage.subscribe(async language => {
        this.src = `assets/safari.${language.code}.json`;
        this.content = await this.jsonLoaderService.loadJson(this.src);
      });
    }
  
    async ngOnInit() {
      this.content = await this.jsonLoaderService.loadJson(this.src);
    }

    ngOnDestroy() {
      if (this.languageSubscription) {
        this.languageSubscription.unsubscribe();
      }
    }

    // Method to return a specific background class based on the content item
    getBackgroundClass(index: number): string {
        const classes = [
            'activities-one',
            'activities-two',
            'activities-three',
            'activities-four',
            'activities-five',
            'activities-six',
            'activities-seven',
            'activities-eight'
        ];
        return classes[index % classes.length];
    }
}
