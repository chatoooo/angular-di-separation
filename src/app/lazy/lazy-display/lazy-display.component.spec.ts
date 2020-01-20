import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LazyDisplayComponent } from './lazy-display.component';

describe('DisplayComponent', () => {
  let component: LazyDisplayComponent;
  let fixture: ComponentFixture<LazyDisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LazyDisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LazyDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
