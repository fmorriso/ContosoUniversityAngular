import { TestBed, inject } from '@angular/core/testing';

import { GridExampleService } from './grid-example.service';

describe('GridExampleService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GridExampleService]
    });
  });

  it('should be created', inject([GridExampleService], (service: GridExampleService) => {
    expect(service).toBeTruthy();
  }));
});
