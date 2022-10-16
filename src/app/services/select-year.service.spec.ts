import { TestBed } from '@angular/core/testing';

import { SelectYearService } from './select-year.service';

describe('SelectYearService', () => {
  let service: SelectYearService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SelectYearService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
