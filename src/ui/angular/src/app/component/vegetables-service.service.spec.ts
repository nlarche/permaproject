import { TestBed } from '@angular/core/testing';

import { VegetablesService } from './vegetables.service';

describe('VegetablesServiceService', () => {
  let service: VegetablesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VegetablesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
