import { Component, Input, OnDestroy } from '@angular/core';
import { JsonLoaderService } from '../json-loader.service';
import { Subscription } from 'rxjs';
import { LanguageService } from '../language.service';
import { CommonModule, NgFor, NgIf } from '@angular/common';
@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, NgFor, NgIf],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss', '../page.scss']
})
export class ContactComponent implements OnDestroy {
  @Input() src: any;

  public content: any;
  private languageSubscription: Subscription;

  constructor(private jsonLoaderService: JsonLoaderService, private languageService: LanguageService) {
    this.languageSubscription = this.languageService.currentLanguage.subscribe(async language => {
      this.src = `assets/contact.${language.code}.json`;
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

  submitForm() {
    debugger;
  }
}
