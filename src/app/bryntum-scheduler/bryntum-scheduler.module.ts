import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BryntumSchedulerRoutingModule } from './bryntum-scheduler-routing.module';
import { BryntumSchedulerComponent } from './bryntum-scheduler.component';


@NgModule({
  declarations: [
    BryntumSchedulerComponent
  ],
  imports: [
    CommonModule,
    BryntumSchedulerRoutingModule
  ]
})
export class BryntumSchedulerModule { }
