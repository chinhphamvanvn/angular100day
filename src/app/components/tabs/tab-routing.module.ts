import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TabHomeComponent } from './tab-home.component';

const routes: Routes = [
  {
    path: '',
    component: TabHomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabRoutingModule { }
