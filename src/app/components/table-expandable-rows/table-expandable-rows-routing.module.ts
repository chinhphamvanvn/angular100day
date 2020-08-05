import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { TableExpandableRowsComponent } from './table-expandable-rows.component';

const routes: Routes = [
  {
    path: '',
    component: TableExpandableRowsComponent
  }
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TableExpandableRowsRoutingModule { }
