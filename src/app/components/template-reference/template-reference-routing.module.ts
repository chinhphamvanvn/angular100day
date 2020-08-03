import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { TemplateReferenceComponent } from './template-reference.component';


const routes: Routes = [
  {
    path: '',
    component: TemplateReferenceComponent
  }
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TemplateReferenceRoutingModule { }
