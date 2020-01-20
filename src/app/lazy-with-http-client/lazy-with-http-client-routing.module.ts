import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LazyHttpDisplayComponent } from './lazy-http-display/lazy-http-display.component';


const routes: Routes = [
  {
    path: '',
    component: LazyHttpDisplayComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LazyWithHttpClientRoutingModule { }
