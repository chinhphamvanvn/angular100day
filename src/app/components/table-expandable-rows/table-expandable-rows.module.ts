import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableExpandableRowsComponent } from './table-expandable-rows.component';
import { TableExpandableRowsRoutingModule } from './table-expandable-rows-routing.module';
import {MatButtonModule} from '@angular/material/button';
import {MatTableModule} from '@angular/material/table';

@NgModule({
  declarations: [TableExpandableRowsComponent],
  imports: [
    CommonModule,
    TableExpandableRowsRoutingModule,
    MatButtonModule,
    MatTableModule
  ],
  exports: [
    MatButtonModule,
    MatTableModule
  ]
})
export class TableExpandableRowsModule { }
