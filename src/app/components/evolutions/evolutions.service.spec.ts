import { TestBed } from '@angular/core/testing';

import { EvolutionsService } from './evolutions.service';

describe('EvolutionsService', () => {
  let service: EvolutionsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EvolutionsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
