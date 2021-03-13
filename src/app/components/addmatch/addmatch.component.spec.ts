import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddmatchComponent } from './addmatch.component';

describe('AddmatchComponent', () => {
  let component: AddmatchComponent;
  let fixture: ComponentFixture<AddmatchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddmatchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddmatchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
