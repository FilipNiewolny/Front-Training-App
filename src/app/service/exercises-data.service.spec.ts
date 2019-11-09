import { TestBed } from '@angular/core/testing';

import { ExercisesDataService } from './exercises-data.service';

describe('ExercisesDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ExercisesDataService = TestBed.get(ExercisesDataService);
    expect(service).toBeTruthy();
  });
});
