import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export class SignInterceptorService implements HttpInterceptor{

  constructor(private sign: string) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(map((response: HttpResponse<any>) => {
      if (response instanceof HttpResponse) {
        if (!response.body['x-intercepted-by']) {
          response.body['x-intercepted-by'] = [];
        }
        response.body['x-intercepted-by'].push(this.sign);
      }
      return response;
    }));
  }
}
