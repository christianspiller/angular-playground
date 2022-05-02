import {Component, Input, OnInit} from '@angular/core';
import {StickyGridPhase, StickyGridScaleElement} from "./model/sticky-grid-phase";
import {StickyGridGroup} from "./model/sticky-grid-group";
import {StickyGridScale} from "./model/sticky-grid-scale";
import {ViewPort} from "./model/view-port";

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
  public scales: StickyGridScale[] = [];
  @Input() set viewPort(value: ViewPort) {
    this._viewPort = value;
    this.calculateScale();
  }
  private _viewPort: ViewPort = {height: 0, left: 0, right: 0, width: 0};


  @Input()
  public rowHeight: number = 25;

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
    for(let phase of this.phases) {

      phase.scales = [{
        length: (phase.stop - phase.start) / this.scales[0].factor,
        elements: StickyGridComponent.createScaleElements(phase, this.scales[0])
      }];
    }
    console.log(this.phases);
  }

  private static createScaleElements(phase: StickyGridPhase, scale: StickyGridScale): Array<StickyGridScaleElement> {
    const length = (phase.stop - phase.start) / scale.factor;
    let elements = [];
    for(let i=0; i<length; i++) {
      elements.push({index: i, value: i + ''});
    }
    console.log(elements);
    return elements;
  }
}
