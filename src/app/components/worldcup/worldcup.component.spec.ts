import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorldcupComponent } from './worldcup.component';

describe('WorldcupComponent', () => {
  let component: WorldcupComponent;
  let fixture: ComponentFixture<WorldcupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorldcupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorldcupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
