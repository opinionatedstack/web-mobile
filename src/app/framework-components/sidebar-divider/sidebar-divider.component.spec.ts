import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { SidebarDividerComponent } from './sidebar-divider.component';

describe('SidebarDividerComponent', () => {
  let component: SidebarDividerComponent;
  let fixture: ComponentFixture<SidebarDividerComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SidebarDividerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SidebarDividerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
