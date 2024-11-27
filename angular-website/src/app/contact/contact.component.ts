import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import axios from 'axios';
import { JsonLoaderService } from '../json-loader.service';
import { LanguageService } from '../language.service';
import { CommonModule, NgFor, NgIf } from '@angular/common';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, NgFor, NgIf],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss', '../page.scss']
})
export class ContactComponent implements OnInit, OnDestroy {
  @Input() src: any;

  public content: any;
  public csrfToken: string = '';
  private languageSubscription: Subscription;
  public baseUrl: string = '';

  public loading: boolean = false;

  constructor(
    private jsonLoaderService: JsonLoaderService,
    private languageService: LanguageService
  ) {
    this.languageSubscription = this.languageService.currentLanguage.subscribe(async (language) => {
      this.src = `assets/contact.${language.code}.json`;
      this.content = await this.jsonLoaderService.loadJson(this.src);
    });
  }

  async ngOnInit() {
    this.content = await this.jsonLoaderService.loadJson(this.src);
    await this.fetchCsrfToken();
  }

  ngOnDestroy() {
    if (this.languageSubscription) {
      this.languageSubscription.unsubscribe();
    }
  }

  async fetchCsrfToken() {
    try {
      const response = await axios.get<{ token: string }>(`${this.baseUrl}/csrf-token.php`);
      this.csrfToken = response.data.token;
    } catch (error) {
      console.error('Error fetching CSRF token:', error);
    }
  }

  async submitForm() {
    this.loading = true;

    const formData = new FormData();
    formData.append('firstName', (document.getElementById('firstName') as HTMLInputElement).value);
    formData.append('lastName', (document.getElementById('lastName') as HTMLInputElement).value);
    formData.append('email', (document.getElementById('email') as HTMLInputElement).value);
    formData.append('phone', (document.getElementById('phone') as HTMLInputElement).value);
    formData.append('subject', (document.getElementById('subject') as HTMLInputElement).value);
    formData.append('message', (document.getElementById('message') as HTMLInputElement).value);
    formData.append('csrf_token', this.csrfToken);

    try {
      const response = await axios.post(`${this.baseUrl}/contact.php`, formData);
      console.log('Form submitted successfully:', response.data);
      alert('Your message has been sent. Thank you for contacting us.');
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('There was an error sending your message. Please contact us directly by email or on whatsapp.');
    }

    this.loading = false;
  }
}
