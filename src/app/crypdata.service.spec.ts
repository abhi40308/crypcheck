import { TestBed, inject } from '@angular/core/testing';

import { CrypdataService } from './crypdata.service';

describe('CrypdataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CrypdataService]
    });
  });

  it('should be created', inject([CrypdataService], (service: CrypdataService) => {
    expect(service).toBeTruthy();
  }));
});
