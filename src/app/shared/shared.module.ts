import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CustomGridComponent } from './custom-grid/custom-grid.component';
import { StickyGridComponent } from './sticky-grid/sticky-grid.component';
import { RowGroupComponent } from './sticky-grid/row-group/row-group.component';
import { HeaderRowGroupComponent } from './sticky-grid/header-row-group/header-row-group.component';

@NgModule({
  imports: [CommonModule],
  declarations: [CustomGridComponent, StickyGridComponent, RowGroupComponent, HeaderRowGroupComponent],
  exports: [CustomGridComponent, StickyGridComponent]
})
export class SharedModule {}
