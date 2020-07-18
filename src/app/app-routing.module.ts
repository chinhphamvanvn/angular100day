import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [

  { path: 'home', loadChildren: () => import('./components/home/home.module').then(m => m.HomeModule)},
  { path: 'hero', loadChildren: () => import('./components/hero/hero.module').then(m => m.HeroModule)},
  { path: 'tab', loadChildren: () => import('./components/tabs/tab.module').then(m => m.TabModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
