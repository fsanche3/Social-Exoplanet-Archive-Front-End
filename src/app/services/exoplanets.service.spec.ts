import { TestBed } from '@angular/core/testing';

import { ExoplanetsService } from './exoplanets.service';

describe('ExoplanetsService', () => {
  let service: ExoplanetsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExoplanetsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
