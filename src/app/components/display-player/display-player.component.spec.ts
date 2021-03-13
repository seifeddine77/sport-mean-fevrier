import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayPlayerComponent } from './display-player.component';

describe('DisplayPlayerComponent', () => {
  let component: DisplayPlayerComponent;
  let fixture: ComponentFixture<DisplayPlayerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplayPlayerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayPlayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
