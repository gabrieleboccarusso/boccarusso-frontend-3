import { TestBed } from '@angular/core/testing';

import { ApiSorterService } from './api-sorter.service';

describe('ApiSorterService', () => {
  let service: ApiSorterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiSorterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
