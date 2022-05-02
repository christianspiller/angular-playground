import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { StickyGridComponent } from './sticky-grid/sticky-grid.component';
import { RowGroupComponent } from './sticky-grid/row-group/row-group.component';
import { HeaderRowGroupComponent } from './sticky-grid/header-row-group/header-row-group.component';
import { MoveAroundDirective } from './move-around/move-around.directive';

@NgModule({
  imports: [CommonModule],
  declarations: [StickyGridComponent, RowGroupComponent, HeaderRowGroupComponent, MoveAroundDirective],
  exports: [StickyGridComponent, MoveAroundDirective]
})
export class SharedModule {}
