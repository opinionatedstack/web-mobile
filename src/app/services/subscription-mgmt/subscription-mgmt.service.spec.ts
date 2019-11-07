import { TestBed } from '@angular/core/testing';

import { SubscriptionMgmtService } from './subscription-mgmt.service';

describe('SubscriptionMgmtService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SubscriptionMgmtService = TestBed.get(SubscriptionMgmtService);
    expect(service).toBeTruthy();
  });
});
