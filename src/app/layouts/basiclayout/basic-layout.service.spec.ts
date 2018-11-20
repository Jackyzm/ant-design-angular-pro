import { TestBed } from '@angular/core/testing';

import { BasicLayoutService } from './basic-layout.service';

describe('BasicLayoutService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BasicLayoutService = TestBed.get(BasicLayoutService);
    expect(service).toBeTruthy();
  });
});
