import { Component, Input } from '@angular/core';
import { HostListener } from '@angular/core';

@Component({
  selector: 'app-custom-grid',
  templateUrl: './custom-grid.component.html',
  styleUrls: ['./custom-grid.component.css'],
})
export class CustomGridComponent {
  public gridWidth = 100;
  public gridHeight = 4;
  @Input()
  public colWidth = 50;
  public rowHeight = 50;
  public visibleRows = [];

  @HostListener('scroll', ['$event'])
  public onScroll(event: any) {
    console.log(event);
  }
}
