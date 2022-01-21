import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { StripeSessionComponent } from './stripe-session.component';

describe('StripeSessionComponent', () => {
  let component: StripeSessionComponent;
  let fixture: ComponentFixture<StripeSessionComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ StripeSessionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StripeSessionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
