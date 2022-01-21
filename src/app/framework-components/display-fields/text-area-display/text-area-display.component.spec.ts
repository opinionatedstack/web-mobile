import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { TextAreaDisplayComponent } from './text-area-display.component';

describe('TextAreaDisplayComponent', () => {
  let component: TextAreaDisplayComponent;
  let fixture: ComponentFixture<TextAreaDisplayComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ TextAreaDisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TextAreaDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
