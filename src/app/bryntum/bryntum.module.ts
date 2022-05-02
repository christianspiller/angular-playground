import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BryntumRoutingModule } from './bryntum-routing.module';
import { BryntumComponent } from './bryntum.component';


@NgModule({
  declarations: [
    BryntumComponent
  ],
  imports: [
    CommonModule,
    BryntumRoutingModule
  ]
})
export class BryntumModule { }
