import { Component, Input, OnInit } from '@angular/core';
import { FullImgComponent } from "../full-img/full-img.component";
import { JsonLoaderService } from '../json-loader.service';
import { NgFor, NgIf, NgClass } from '@angular/common'; // Add NgClass here
import { LanguageService } from '../language.service';
import { Subscription } from 'rxjs';
import { ViewportScroller } from '@angular/common'; // Import ViewportScroller

@Component({
    selector: 'app-meals',
    standalone: true,
    templateUrl: './meals.component.html',
    styleUrls: ['./meals.component.scss', '../page.scss'],
    imports: [FullImgComponent, NgIf, NgFor, NgClass] // Add NgClass here
})
export class MealsComponent implements OnInit {
    @Input() src: any;

    public content: any;
    public categories: string[] = ['Breakfast', 'Lunch', 'Dinner'];
    public selectedCategory: string = 'Breakfast';
    public filteredContainer: any[] = [];
    public errorMessage: string = '';
    private languageSubscription: Subscription;

    constructor(
        private jsonLoaderService: JsonLoaderService,
        private languageService: LanguageService,
        private viewportScroller: ViewportScroller // Inject ViewportScroller
    ) {
        this.languageSubscription = this.languageService.currentLanguage.subscribe(async language => {
            this.src = `assets/meals.${language.code}.json`;
            try {
                this.content = await this.jsonLoaderService.loadJson(this.src);
                this.filterByCategory(this.selectedCategory);
            } catch (error) {
                this.errorMessage = 'Failed to load meals. Please try again later.';
                console.error('Error loading JSON:', error);
            }
        });
    }

    async ngOnInit() {
        try {
            this.content = await this.jsonLoaderService.loadJson(this.src);
            this.filterByCategory(this.selectedCategory);
        } catch (error) {
            this.errorMessage = 'Failed to load meals. Please try again later.';
            console.error('Error loading JSON:', error);
        }
    }

    selectCategory(category: string) {
        this.selectedCategory = category;
        this.filterByCategory(category);
    }

    filterByCategory(category: string) {
        if (this.content && this.content.container) {
            this.filteredContainer = this.content.container.filter((cat: any) => 
                cat.category.toLowerCase() === category.toLowerCase()
            );
        }
    }

    // Method to scroll to the "More Dishes" section
    scrollToMoreDishes() {
        this.viewportScroller.scrollToAnchor('more-dishes');
    }

    ngOnDestroy() {
        if (this.languageSubscription) {
            this.languageSubscription.unsubscribe();
        }
    }
}