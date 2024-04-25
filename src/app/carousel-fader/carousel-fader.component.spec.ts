import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarouselFaderComponent } from './carousel-fader.component';

describe('CarouselFaderComponent', () => {
  let component: CarouselFaderComponent;
  let fixture: ComponentFixture<CarouselFaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarouselFaderComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CarouselFaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
