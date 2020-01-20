import { TestBed } from '@angular/core/testing';

import { SignInterceptorService } from './sign-interceptor.service';

describe('SignInterceptorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SignInterceptorService = TestBed.get(SignInterceptorService);
    expect(service).toBeTruthy();
  });
});
