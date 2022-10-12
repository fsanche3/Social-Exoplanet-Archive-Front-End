import { TestBed } from '@angular/core/testing';

import { ExoUserService } from './exo-user.service';

describe('ExoUserService', () => {
  let service: ExoUserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExoUserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
