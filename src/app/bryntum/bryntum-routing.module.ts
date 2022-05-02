import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BryntumComponent } from './bryntum.component';

const routes: Routes = [{ path: '', component: BryntumComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BryntumRoutingModule { }
