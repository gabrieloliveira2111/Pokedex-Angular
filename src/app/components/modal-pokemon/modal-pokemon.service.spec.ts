import { TestBed } from '@angular/core/testing';

import { ModalPokemonService } from './modal-pokemon.service';

describe('ModalPokemonService', () => {
  let service: ModalPokemonService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ModalPokemonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
