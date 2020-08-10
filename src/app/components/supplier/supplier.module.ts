import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SupplierRoutingModule } from './supplier-routing.module';
import { SupplierComponent } from './supplier.component';

import { AgGridModule } from 'ag-grid-angular';


@NgModule({
  declarations: [SupplierComponent],
  imports: [
    CommonModule,
    SupplierRoutingModule,
    AgGridModule.withComponents([]),
  ]
})
export class SupplierModule { }
