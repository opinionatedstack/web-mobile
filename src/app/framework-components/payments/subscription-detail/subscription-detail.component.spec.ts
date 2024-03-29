import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { SubscriptionDetailComponent } from './subscription-detail.component';

describe('SubscriptionDetailComponent', () => {
  let component: SubscriptionDetailComponent;
  let fixture: ComponentFixture<SubscriptionDetailComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SubscriptionDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubscriptionDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
