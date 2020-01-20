import { HTTP_INTERCEPTORS, HttpBackend, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable, InjectFlags, Injector } from '@angular/core';
import { Observable } from 'rxjs';

class HttpInterceptorHandler implements HttpHandler {
  constructor(private next: HttpHandler, private interceptor: HttpInterceptor) {}

  handle(req: HttpRequest<any>): Observable<HttpEvent<any>> {
    return this.interceptor.intercept(req, this.next);
  }
}

@Injectable()
export class HttpInterceptingHandler implements HttpHandler {
  private chain: HttpHandler|null = null;

  constructor(private backend: HttpBackend, private injector: Injector) {}

  handle(req: HttpRequest<any>): Observable<HttpEvent<any>> {
    if (this.chain === null) {
      const interceptors = this.injector.get(HTTP_INTERCEPTORS, [], InjectFlags.SkipSelf);
      const currentModuleInterceptors = this.injector.get(HTTP_INTERCEPTORS, [], InjectFlags.Self);
      const interceptorsToRun = [];
      interceptorsToRun.push(...interceptors);
      interceptorsToRun.push(...currentModuleInterceptors);
      this.chain = interceptorsToRun.reduceRight(
        (next, interceptor) => new HttpInterceptorHandler(next, interceptor), this.backend);
    }
    return this.chain.handle(req);
  }
}

