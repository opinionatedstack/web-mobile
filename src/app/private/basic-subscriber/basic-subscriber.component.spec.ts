import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { BasicSubscriberComponent } from './basic-subscriber.component';

describe('BasicSubscriberComponent', () => {
  let component: BasicSubscriberComponent;
  let fixture: ComponentFixture<BasicSubscriberComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ BasicSubscriberComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BasicSubscriberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
