import { TestBed } from '@angular/core/testing';

import { MaPremiereLibrairieService } from './ma-premiere-librairie.service';

describe('MaPremiereLibrairieService', () => {
  let service: MaPremiereLibrairieService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MaPremiereLibrairieService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
