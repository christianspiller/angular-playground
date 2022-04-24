import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DhtmlxRoutingModule } from './dhtmlx-routing.module';
import { DhtmlxComponent } from './dhtmlx.component';
import { GanttComponent } from './gantt/gantt.component';


@NgModule({
  declarations: [
    DhtmlxComponent,
    GanttComponent
  ],
  imports: [
    CommonModule,
    DhtmlxRoutingModule
  ]
})
export class DhtmlxModule { }
