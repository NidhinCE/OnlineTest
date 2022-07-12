import { TestBed } from '@angular/core/testing';

import { ReadQuestionsService } from './read-questions.service';

describe('ReadQuestionsService', () => {
  let service: ReadQuestionsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReadQuestionsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
