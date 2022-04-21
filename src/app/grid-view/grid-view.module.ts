import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GridComponent } from './grid/grid.component';
import { RouterModule } from '@angular/router';
import {SharedModule} from "../shared/shared.module";




@NgModule({
  declarations: [
    GridComponent
  ],
    imports: [
        RouterModule.forChild([{path: '', component: GridComponent}]),
        CommonModule,
        SharedModule
    ],
  exports: [GridComponent]
})
export class GridViewModule { }
