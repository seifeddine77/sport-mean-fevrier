import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayTeamComponent } from './display-team.component';

describe('DisplayTeamComponent', () => {
  let component: DisplayTeamComponent;
  let fixture: ComponentFixture<DisplayTeamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplayTeamComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayTeamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
