import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BryntumSchedulerRoutingModule } from './bryntum-scheduler-routing.module';
import { BryntumSchedulerComponent } from './bryntum-scheduler.component';
import {BryntumGanttModule} from "@bryntum/gantt-angular";


@NgModule({
  declarations: [
    BryntumSchedulerComponent
  ],
  imports: [
    CommonModule,
    BryntumSchedulerRoutingModule,
    BryntumGanttModule
  ]
})
export class BryntumSchedulerModule { }
