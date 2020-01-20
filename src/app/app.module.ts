import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HIGHLIGHT_OPTIONS, HighlightModule } from 'ngx-highlightjs';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DisplayComponent } from './display/display.component';
import { SignInterceptorService } from './sign-interceptor.service';

@NgModule({
  declarations: [
    AppComponent,
    DisplayComponent
  ],
  imports: [
    HighlightModule,
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [
    {
      provide: HIGHLIGHT_OPTIONS,
      useValue: {
        languages: () => ({
          json: () => import('highlight.js/lib/languages/json'),
        }),
      }
    },
    {provide: HTTP_INTERCEPTORS, useFactory: () => new SignInterceptorService('core'), multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
