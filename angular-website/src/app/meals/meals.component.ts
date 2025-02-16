import { Component, Input, OnInit } from '@angular/core';
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
export class MealsComponent implements OnInit {
    @Input() src: any;

    public content: any;
    public errorMessage: string = '';
    private languageSubscription: Subscription;

    constructor(private jsonLoaderService: JsonLoaderService, private languageService: LanguageService) {
        this.languageSubscription = this.languageService.currentLanguage.subscribe(async language => {
            this.src = `assets/meals.${language.code}.json`;
            try {
                this.content = await this.jsonLoaderService.loadJson(this.src);
            } catch (error) {
                this.errorMessage = 'Failed to load meals. Please try again later.';
                console.error('Error loading JSON:', error);
            }
        });
    }

    async ngOnInit() {
        try {
            this.content = await this.jsonLoaderService.loadJson(this.src);
        } catch (error) {
            this.errorMessage = 'Failed to load meals. Please try again later.';
            console.error('Error loading JSON:', error);
        }
    }

    ngOnDestroy() {
        if (this.languageSubscription) {
            this.languageSubscription.unsubscribe();
        }
    }
}