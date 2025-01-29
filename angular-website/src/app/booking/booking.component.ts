// booking.component.ts
import { Component, Input, OnDestroy } from '@angular/core';
import { JsonLoaderService } from '../json-loader.service';
import { Subscription } from 'rxjs';
import { LanguageService } from '../language.service';
import { CommonModule, NgFor } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-booking',
  standalone: true,
  imports: [CommonModule, NgFor, ReactiveFormsModule],
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.scss', '../page.scss']
})
export class BookingComponent implements OnDestroy {
  @Input() src: any;

  public content: any;
  private languageSubscription: Subscription;

  bookingForm: FormGroup;
  minEndDate: string | null = null;
  successMessage: string = '';
  errorMessage: string = '';

  constructor(
    private jsonLoaderService: JsonLoaderService,
    private languageService: LanguageService,
    private fb: FormBuilder
  ) {
    this.languageSubscription = this.languageService.currentLanguage.subscribe(async language => {
      this.src = `assets/booking.${language.code}.json`;
      this.content = await this.jsonLoaderService.loadJson(this.src);
    });

    this.bookingForm = this.fb.group({
      startDate: [null, Validators.required],
      endDate: [null, Validators.required],
      rooms: ['3', Validators.required],
      privateChef: [false],
    });
  }

  async ngOnInit() {
    this.content = await this.jsonLoaderService.loadJson(this.src);
  }

  onStartDateChange() {
    const startDate = this.bookingForm.get('startDate')?.value;
    if (startDate) {
      this.minEndDate = startDate;
      this.bookingForm.get('endDate')?.setValue(null);
    }
  }

  onSubmit() {
    if (this.bookingForm.valid) {
      this.successMessage = 'Booking confirmed!';
      this.errorMessage = '';
      this.bookingForm.reset();
    } else {
      this.successMessage = '';
      this.errorMessage = 'Please fill in all required fields before booking.';
    }
  }

  ngOnDestroy() {
    if (this.languageSubscription) {
      this.languageSubscription.unsubscribe();
    }
  }
}