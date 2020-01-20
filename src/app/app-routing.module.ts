import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DisplayComponent } from './display/display.component';
import { LazyWithHackModule } from './lazy-with-hack/lazy-with-hack.module';
import { LazyWithHttpClientModule } from './lazy-with-http-client/lazy-with-http-client.module';
import { LazyModule } from './lazy/lazy.module';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/core'
  },
  {
    path: 'core',
    component: DisplayComponent,
  },
  {
    path: 'lazy',
    loadChildren: () => LazyModule,
  },
  {
    path: 'lazy-with-http-client',
    loadChildren: () => LazyWithHttpClientModule,
  },
  {
    path: 'lazy-with-hack',
    loadChildren: () => LazyWithHackModule,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
