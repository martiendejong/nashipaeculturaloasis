import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { FullImgComponent } from '../full-img/full-img.component';
import { JsonLoaderService } from '../json-loader.service';
import { Subscription } from 'rxjs';
import { LanguageService } from '../language.service';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [FullImgComponent, NgFor, NgIf],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss', '../page.scss']
})
export class AboutComponent implements OnInit, OnDestroy {

  @Input() src: string = '../../assets/about.json';

  public content: any[] = [];
  private languageSubscription: Subscription;

  constructor(private jsonLoaderService: JsonLoaderService, private languageService: LanguageService) {
    this.languageSubscription = this.languageService.currentLanguage.subscribe(language => {
      this.src = `../../assets/about.${language.code}.json`; // Fixed string interpolation
      this.jsonLoaderService.loadJson(this.src).then(content => this.content = content);
    });
  }

  async ngOnInit() {
    try {
      this.content = await this.jsonLoaderService.loadJson(this.src);
    } catch (error) {
      console.error('Error loading JSON:', error);
    }
  }

  ngOnDestroy() {
    if (this.languageSubscription) {
      this.languageSubscription.unsubscribe();
    }
  }
}