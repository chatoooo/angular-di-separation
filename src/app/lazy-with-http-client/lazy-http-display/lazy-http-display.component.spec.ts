import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LazyHttpDisplayComponent } from './lazy-http-display.component';

describe('DisplayComponent', () => {
  let component: LazyHttpDisplayComponent;
  let fixture: ComponentFixture<LazyHttpDisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LazyHttpDisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LazyHttpDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
