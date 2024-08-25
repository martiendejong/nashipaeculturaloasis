import { TestBed } from '@angular/core/testing';

import { FullScreen } from './fullscreen.service';

describe('FullscreenService', () => {
  let service: FullScreen;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FullScreen);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
