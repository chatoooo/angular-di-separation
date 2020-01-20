import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HighlightModule } from 'ngx-highlightjs';
import { SignInterceptorService } from '../sign-interceptor.service';

import { LazyWithHttpClientRoutingModule } from './lazy-with-http-client-routing.module';
import { LazyHttpDisplayComponent } from './lazy-http-display/lazy-http-display.component';


@NgModule({
  declarations: [LazyHttpDisplayComponent],
  imports: [
    CommonModule,
    HighlightModule,
    HttpClientModule,
    LazyWithHttpClientRoutingModule
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useFactory: () => new SignInterceptorService('lazy'), multi: true}
  ]
})
export class LazyWithHttpClientModule { }
