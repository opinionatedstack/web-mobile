import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { PremiumSubscriberComponent } from './premium-subscriber.component';

describe('PremiumSubscriberComponent', () => {
  let component: PremiumSubscriberComponent;
  let fixture: ComponentFixture<PremiumSubscriberComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PremiumSubscriberComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PremiumSubscriberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
