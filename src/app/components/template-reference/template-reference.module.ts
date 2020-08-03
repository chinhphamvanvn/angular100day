import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';

import { TemplateReferenceRoutingModule } from './template-reference-routing.module';
import { TemplateReferenceComponent } from './template-reference.component';


@NgModule({
  declarations: [
    TemplateReferenceComponent
  ],
  imports: [
    CommonModule,
    TemplateReferenceRoutingModule,
    FormsModule
  ]
})
export class TemplateReferenceModule { }
