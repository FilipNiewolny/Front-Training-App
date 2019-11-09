import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListExercisesComponent } from './List-exercises.component';

describe('ListExercisesComponent', () => {
  let component: ListExercisesComponent;
  let fixture: ComponentFixture<ListExercisesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListExercisesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListExercisesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
