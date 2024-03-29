import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { TextFieldDisplayComponent } from './text-field-display.component';

describe('TextFieldDisplayComponent', () => {
  let component: TextFieldDisplayComponent;
  let fixture: ComponentFixture<TextFieldDisplayComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ TextFieldDisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TextFieldDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
