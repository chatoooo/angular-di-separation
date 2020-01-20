import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HackDisplayComponent } from './hack-display/hack-display.component';


const routes: Routes = [
  {
    path: '',
    component: HackDisplayComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LazyWithHackRoutingModule { }
