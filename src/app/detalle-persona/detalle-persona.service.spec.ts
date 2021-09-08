import { TestBed } from '@angular/core/testing';

import { DetallePersonaService } from './detalle-persona.service';

describe('DetallePersonaService', () => {
  let service: DetallePersonaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DetallePersonaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
