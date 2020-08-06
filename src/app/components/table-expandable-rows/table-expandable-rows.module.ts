import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableExpandableRowsComponent } from './table-expandable-rows.component';
import { TableExpandableRowsRoutingModule } from './table-expandable-rows-routing.module';
import {MatButtonModule} from '@angular/material/button';
import {MatTableModule} from '@angular/material/table';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {CdkTableModule} from '@angular/cdk/table';
import {MatPaginatorModule} from '@angular/material/paginator';

@NgModule({
  declarations: [TableExpandableRowsComponent],
  imports: [
    CommonModule,
    TableExpandableRowsRoutingModule,
    MatButtonModule,
    MatTableModule,
    MatCheckboxModule,
    ReactiveFormsModule,
    FormsModule,
    CdkTableModule,
    MatPaginatorModule
  ],
  exports: [
    MatButtonModule,
    MatTableModule,
    MatCheckboxModule
  ]
})
export class TableExpandableRowsModule { }
