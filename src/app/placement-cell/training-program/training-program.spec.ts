import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainingProgram } from './training-program';

describe('TrainingProgram', () => {
  let component: TrainingProgram;
  let fixture: ComponentFixture<TrainingProgram>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TrainingProgram],
    }).compileComponents();

    fixture = TestBed.createComponent(TrainingProgram);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
