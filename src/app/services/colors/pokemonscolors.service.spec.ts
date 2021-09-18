import { TestBed } from '@angular/core/testing';

import { PokemonscolorsService } from './pokemonscolors.service';

describe('PokemonscolorsService', () => {
  let service: PokemonscolorsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PokemonscolorsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
