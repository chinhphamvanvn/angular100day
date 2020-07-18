import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TabGroupComponent } from './tab-group.component';

const routes: Routes = [
  {
    path: '',
    component: TabGroupComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabRoutingModule { }
