import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BryntumSchedulerComponent } from './bryntum-scheduler.component';

const routes: Routes = [{ path: '', component: BryntumSchedulerComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BryntumSchedulerRoutingModule { }
