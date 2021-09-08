import { TestBed } from '@angular/core/testing';

import { DetallePlanetaService } from './detalle-planeta.service';

describe('DetallePlanetaService', () => {
  let service: DetallePlanetaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DetallePlanetaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
