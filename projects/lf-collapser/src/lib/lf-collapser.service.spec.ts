import { TestBed } from '@angular/core/testing';

import { LfCollapserService } from './lf-collapser.service';

describe('LfCollapserService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LfCollapserService = TestBed.get(LfCollapserService);
    expect(service).toBeTruthy();
  });
});
