import { TestBed } from '@angular/core/testing';

import { JWTInterceptorInterceptor } from './jwt-interceptor.interceptor';

describe('JWTInterceptorInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      JWTInterceptorInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: JWTInterceptorInterceptor = TestBed.inject(JWTInterceptorInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
