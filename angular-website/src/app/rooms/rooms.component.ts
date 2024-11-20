import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { FullImgComponent } from '../full-img/full-img.component';
import { JsonLoaderService } from '../json-loader.service';
import { Subscription } from 'rxjs';
import { LanguageService } from '../language.service';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-rooms',
  standalone: true,
  imports: [FullImgComponent, NgFor, NgIf],
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss', '../page.scss']
})
export class RoomsComponent implements OnInit, OnDestroy {

  @Input() src: any;

  public content: any;
  private languageSubscription: Subscription;

  constructor(private jsonLoaderService: JsonLoaderService, private languageService: LanguageService) {
    this.languageSubscription = this.languageService.currentLanguage.subscribe(async language => {
      this.src = `assets/rooms.${language.code}.json`;
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
