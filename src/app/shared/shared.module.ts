import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CustomGridComponent } from './custom-grid/custom-grid.component';
import { StickyGridComponent } from './sticky-grid/sticky-grid.component';

@NgModule({
  imports: [CommonModule],
  declarations: [CustomGridComponent, StickyGridComponent],
  exports: [CustomGridComponent]
})
export class SharedModule {}
