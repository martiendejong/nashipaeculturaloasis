import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FullImgComponent } from './full-img.component';

describe('FullImgComponent', () => {
  let component: FullImgComponent;
  let fixture: ComponentFixture<FullImgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FullImgComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FullImgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
