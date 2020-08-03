import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: () => import('./components/home/home.module').then(m => m.HomeModule)},
  { path: 'home', loadChildren: () => import('./components/home/home.module').then(m => m.HomeModule)},
  { path: 'hero', loadChildren: () => import('./components/hero/hero.module').then(m => m.HeroModule)},
  { path: 'template-reference', loadChildren: () => import('./components/template-reference/template-reference.module')
    .then(m => m.TemplateReferenceModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
