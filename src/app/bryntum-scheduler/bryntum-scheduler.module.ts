import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BryntumSchedulerRoutingModule } from './bryntum-scheduler-routing.module';
import { BryntumSchedulerComponent } from './bryntum-scheduler.component';
import {BryntumSchedulerProModule} from "@bryntum/schedulerpro-angular";


@NgModule({
  declarations: [
    BryntumSchedulerComponent
  ],
  imports: [
    CommonModule,
    BryntumSchedulerRoutingModule,
    BryntumSchedulerProModule
  ]
})
export class BryntumSchedulerModule { }
