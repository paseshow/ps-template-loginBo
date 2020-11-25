/* tslint:disable:no-unused-variable */
import { inject, TestBed } from '@angular/core/testing';
import { ValidacionService } from './validacion.service';

describe('ValidacionService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ValidacionService]
    });
  });

  it('should ...', inject([ValidacionService], (service: ValidacionService) => {
    expect(service).toBeTruthy();
  }));
});
