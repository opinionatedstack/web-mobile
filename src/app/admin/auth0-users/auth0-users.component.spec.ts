import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { Auth0UsersComponent } from './auth0-users.component';

describe('Auth0UsersComponent', () => {
  let component: Auth0UsersComponent;
  let fixture: ComponentFixture<Auth0UsersComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ Auth0UsersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Auth0UsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
