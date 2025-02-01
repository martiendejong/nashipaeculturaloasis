import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BookingComponent } from './booking.component';
import { By } from '@angular/platform-browser';

describe('BookingComponent', () => {
  let component: BookingComponent;
  let fixture: ComponentFixture<BookingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BookingComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(BookingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the booking component', () => {
    expect(component).toBeTruthy();
  });

  it('should render the heading correctly', () => {
    const headingEl = fixture.debugElement.query(By.css('.heading'));
    expect(headingEl.nativeElement.textContent).toContain('Make a Booking at Nashipae Cultural Oasis');
  });

  it('should render four plan boxes', () => {
    const planEls = fixture.debugElement.queryAll(By.css('.plan'));
    expect(planEls.length).toBe(4);
  });

  it('should display plan buttons with correct text', () => {
    const buttons = fixture.debugElement.queryAll(By.css('.plan-button'));
    expect(buttons.length).toBe(4);
    expect(buttons[0].nativeElement.textContent).toContain('Choose Basic Plan');
    expect(buttons[1].nativeElement.textContent).toContain('Choose Standard Plan');
    expect(buttons[2].nativeElement.textContent).toContain('Choose Premium Plan');
    expect(buttons[3].nativeElement.textContent).toContain('Choose Full House Booking');
  });
});
