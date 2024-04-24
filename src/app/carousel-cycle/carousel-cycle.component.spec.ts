import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarouselCycleComponent } from './carousel-cycle.component';

describe('CarouselCycleComponent', () => {
  let component: CarouselCycleComponent;
  let fixture: ComponentFixture<CarouselCycleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarouselCycleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CarouselCycleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
