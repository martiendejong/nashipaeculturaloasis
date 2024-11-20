import { Component, Input, OnDestroy } from '@angular/core';
import { FullImgComponent } from "../full-img/full-img.component";
import { JsonLoaderService } from '../json-loader.service';
import { NgFor, NgIf } from '@angular/common';
import { LanguageService } from '../language.service';
import { Subscription } from 'rxjs';

@Component({
    selector: 'app-meals',
    standalone: true,
    templateUrl: './meals.component.html',
    styleUrls: ['./meals.component.scss', '../page.scss'],
    imports: [FullImgComponent, NgIf, NgFor]
})
export class MealsComponent implements OnDestroy {
    @Input() src: any;

    public content: any;
    private languageSubscription: Subscription;
  
    constructor(private jsonLoaderService: JsonLoaderService, private languageService: LanguageService) {
        this.languageSubscription = this.languageService.currentLanguage.subscribe(async language => {
            this.src = `assets/meals.${language.code}.json`;
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
}
