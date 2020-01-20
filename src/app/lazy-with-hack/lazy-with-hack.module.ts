import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS, HttpClientModule, HttpHandler } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { HighlightModule } from 'ngx-highlightjs';
import { SignInterceptorService } from '../sign-interceptor.service';
import { HackDisplayComponent } from './hack-display/hack-display.component';
import { HttpInterceptingHandler } from './http-intercepting-handler';
import { LazyWithHackRoutingModule } from './lazy-with-hack-routing.module';

@NgModule({
  declarations: [HackDisplayComponent],
  imports: [
    CommonModule,
    HighlightModule,
    HttpClientModule,
    LazyWithHackRoutingModule,
  ],
  providers: [
    {provide: HttpHandler, useClass: HttpInterceptingHandler},
    {provide: HTTP_INTERCEPTORS, useFactory: () => new SignInterceptorService('lazy'), multi: true},
  ],
})
export class LazyWithHackModule {}
