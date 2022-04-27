import {Component, Input, OnInit} from '@angular/core';
import {StickyGridPhase} from "./model/sticky-grid-phase";
import {StickyGridGroup} from "./model/sticky-grid-group";
import {StickyGridScale} from "./model/sticky-grid-scale";

@Component({
  selector: 'app-sticky-grid',
  templateUrl: './sticky-grid.component.html',
  styleUrls: ['./sticky-grid.component.css']
})
export class StickyGridComponent implements OnInit {

  @Input()
  public phases: StickyGridPhase[] = [];
  @Input()
  public groups: StickyGridGroup[] = [];

  @Input()
  public scales: StickyGridScale[] = [
    {
      numColumns: 60,
      maxWidth: 100,
      minWidth: 20
    }
  ];

  @Input()
  public rowHeight: number = 25;

  public selectedScale: string[] = [];

  private _numRows: number = 1;

  constructor() { }

  ngOnInit(): void {
    this.calculateGridHeight();
    this.calculateScale();
  }

  get numRows() {
    return this._numRows;
  }

  private calculateGridHeight() {
    let numRows = 0;
    for(let group of this.groups) {
      numRows += this.countRows(group);
    }
    this._numRows = numRows;
  }

  private countRows(group: StickyGridGroup) : number {
    let numRows: number = group.rows.length + 1;
    for(let subGroup of group.subGroups) {
      numRows += this.countRows(subGroup);
    }
    return numRows;
  }

  private calculateScale() {
    this.selectedScale = new Array(this.scales[0].numColumns);
  }
}
