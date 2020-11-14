import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { StripeCancelComponent } from './stripe-cancel.component';

describe('StripeCancelComponent', () => {
  let component: StripeCancelComponent;
  let fixture: ComponentFixture<StripeCancelComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ StripeCancelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StripeCancelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
