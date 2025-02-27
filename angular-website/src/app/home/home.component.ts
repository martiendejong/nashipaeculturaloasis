import { Component, Input, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { FullImgComponent } from '../full-img/full-img.component';
import { CarouselCycleComponent } from "../carousel-cycle/carousel-cycle.component";
import { NgFor, NgIf } from '@angular/common';
import { JsonLoaderService } from '../json-loader.service';
import { Subscription } from 'rxjs';
import { LanguageService } from '../language.service';
import { HttpClient, HttpClientModule, provideHttpClient } from '@angular/common/http';

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss', '../page.scss'],
    providers: [{ provide: HttpClient, useFactory: provideHttpClient }],
    imports: [FullImgComponent, CarouselCycleComponent, NgFor, NgIf, HttpClientModule]
})
export class HomeComponent implements OnInit, OnDestroy {
    @ViewChild(CarouselCycleComponent) carousel!: CarouselCycleComponent;

    @Input() src: any;
    @Input() aboutSrc: string = 'assets/about.json'; // Path to About JSON

    public content: any;
    public aboutContent: any; // Property for About content
    private languageSubscription: Subscription;

    constructor(private jsonLoaderService: JsonLoaderService, private languageService: LanguageService) {
        this.languageSubscription = this.languageService.currentLanguage.subscribe(async language => {
            this.src = `assets/home.${language.code}.json`;
            this.aboutSrc = `assets/about.${language.code}.json`; // Update About JSON path
            this.content = await this.jsonLoaderService.loadJson(this.src);
            this.aboutContent = await this.jsonLoaderService.loadJson(this.aboutSrc); // Load About content
        });
    }

    async ngOnInit() {
        this.content = await this.jsonLoaderService.loadJson(this.src);
        this.aboutContent = await this.jsonLoaderService.loadJson(this.aboutSrc); // Load About content
    }

    ngOnDestroy() {
        if (this.languageSubscription) {
            this.languageSubscription.unsubscribe();
        }
    }
}