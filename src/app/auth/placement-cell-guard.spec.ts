import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { placementCellGuard } from './placement-cell-guard';

describe('placementCellGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) =>
    TestBed.runInInjectionContext(() => placementCellGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
