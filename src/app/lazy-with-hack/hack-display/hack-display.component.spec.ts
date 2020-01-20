import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HackDisplayComponent } from './hack-display.component';

describe('HackDisplayComponent', () => {
  let component: HackDisplayComponent;
  let fixture: ComponentFixture<HackDisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HackDisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HackDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
