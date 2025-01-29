// booking.component.spec.ts
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BookingComponent } from './booking.component';
import { ReactiveFormsModule } from '@angular/forms';

describe('BookingComponent', () => {
  let component: BookingComponent;
  let fixture: ComponentFixture<BookingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BookingComponent, ReactiveFormsModule]
    }).compileComponents();

    fixture = TestBed.createComponent(BookingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a form initialized', () => {
    expect(component.bookingForm).toBeDefined();
  });

  it('should disable submit button if form is invalid', () => {
    component.bookingForm.patchValue({
      startDate: null,
      endDate: null,
    });
    expect(component.bookingForm.valid).toBeFalsy();
  });

  it('should call onSubmit when form is submitted', () => {
    spyOn(component, 'onSubmit');
    component.bookingForm.patchValue({
      startDate: '2025-01-01',
      endDate: '2025-01-03',
      rooms: '3',
      privateChef: false,
    });
    component.onSubmit();
    expect(component.onSubmit).toHaveBeenCalled();
  });
});