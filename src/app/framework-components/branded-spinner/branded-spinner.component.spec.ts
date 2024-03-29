import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { BrandedSpinnerComponent } from './branded-spinner.component';

describe('BrandedSpinnerComponent', () => {
  let component: BrandedSpinnerComponent;
  let fixture: ComponentFixture<BrandedSpinnerComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ BrandedSpinnerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BrandedSpinnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
