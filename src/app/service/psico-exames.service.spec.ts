import { TestBed } from '@angular/core/testing';

import { PsicoExamesService } from './psico-exames.service';

describe('PsicoExamesService', () => {
  let service: PsicoExamesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PsicoExamesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
