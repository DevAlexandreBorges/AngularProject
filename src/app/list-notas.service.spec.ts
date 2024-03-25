import { TestBed } from '@angular/core/testing';

import { ListNotasService } from './list-notas.service';

describe('ListNotasServiceService', () => {
  let service: ListNotasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListNotasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
