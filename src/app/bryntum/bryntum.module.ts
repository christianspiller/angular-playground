import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BryntumRoutingModule } from './bryntum-routing.module';
import { BryntumComponent } from './bryntum.component';
import {BryntumGanttModule} from "@bryntum/gantt-angular";


@NgModule({
  declarations: [
    BryntumComponent
  ],
  imports: [
    CommonModule,
    BryntumRoutingModule,
    BryntumGanttModule
  ]
})
export class BryntumModule { }
