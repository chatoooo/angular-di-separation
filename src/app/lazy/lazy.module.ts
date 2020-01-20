import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { HighlightModule } from 'ngx-highlightjs';
import { SignInterceptorService } from '../sign-interceptor.service';
import { LazyDisplayComponent } from './lazy-display/lazy-display.component';

import { LazyRoutingModule } from './lazy-routing.module';

@NgModule({
  declarations: [LazyDisplayComponent],
  imports: [
    CommonModule,
    HighlightModule,
    LazyRoutingModule,
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useFactory: () => new SignInterceptorService('lazy'), multi: true}
  ]
})
export class LazyModule {}
