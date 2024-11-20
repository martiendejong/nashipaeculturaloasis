import { Component, Input, OnDestroy } from '@angular/core';
import { JsonLoaderService } from '../json-loader.service';
import { Subscription } from 'rxjs';
import { LanguageService } from '../language.service';
import { CommonModule, NgFor } from '@angular/common';
import { FullImgComponent } from "../full-img/full-img.component";

@Component({
  selector: 'app-booking',
  standalone: true,
  imports: [CommonModule, NgFor, FullImgComponent],
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.scss', '../page.scss']
})
export class BookingComponent implements OnDestroy {
  @Input() src: any;

  public content: any;
  private languageSubscription: Subscription;

  constructor(private jsonLoaderService: JsonLoaderService, private languageService: LanguageService) {
    this.languageSubscription = this.languageService.currentLanguage.subscribe(async language => {
      this.src = `assets/booking.${language.code}.json`;
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
