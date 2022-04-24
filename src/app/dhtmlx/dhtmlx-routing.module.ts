import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DhtmlxComponent } from './dhtmlx.component';

const routes: Routes = [{ path: '', component: DhtmlxComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DhtmlxRoutingModule { }
