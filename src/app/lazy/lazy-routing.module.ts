import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LazyDisplayComponent } from './lazy-display/lazy-display.component';

const routes: Routes = [
  {
    path: '',
    component: LazyDisplayComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LazyRoutingModule { }
