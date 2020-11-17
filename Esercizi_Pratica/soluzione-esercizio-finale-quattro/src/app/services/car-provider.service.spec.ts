import { TestBed } from '@angular/core/testing';

import { CarProviderService } from './car-provider.service';

describe('CarProviderService', () => {
  let service: CarProviderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CarProviderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
