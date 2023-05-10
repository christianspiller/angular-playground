import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  { path: 'custom-grid',
    loadChildren: () => import('./grid-view/grid-view.module').then(m => m.GridViewModule) },
  { path: 'dhtmlx',
    loadChildren: () => import('./dhtmlx/dhtmlx.module').then(m => m.DhtmlxModule) },
  // { path: 'bryntum', loadChildren: () => import('./bryntum/bryntum.module').then(m => m.BryntumModule) }
  ]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
