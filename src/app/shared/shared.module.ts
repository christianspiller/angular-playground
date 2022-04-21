import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CustomGridComponent } from './custom-grid/custom-grid.component';

@NgModule({
  imports: [CommonModule],
  declarations: [CustomGridComponent],
  exports: [CustomGridComponent]
})
export class SharedModule {}
