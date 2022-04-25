import {Component, Input, OnInit} from '@angular/core';
import {GroupModel} from "./model/grid-data.model";

@Component({
  selector: 'app-custom-grid',
  templateUrl: './custom-grid.component.html',
  styleUrls: ['./custom-grid.component.css'],
})
export class CustomGridComponent implements OnInit{
  get phases(): number[] {
    return this._phases;
  }
  public numCols = 10;
  @Input()
  public group: GroupModel = {name: 'none', color: 'black', level: 0, groups: [], tracks: []} ;
  public rowHeight = 50;

  public gridHeight = 0;
  public visibleCols: Array<any> | undefined;

  private _phases: number[] = [];

  private _viewPort: {left: number, top: number, width: number, height: number} = {left: 0, top: 0, width: 0, height: 0};

  @Input() set phases(value: number[]) {
    this._phases = value;
    this.resize();
  }

  @Input() set viewPort(value: {left: number, top: number, width: number, height: number}) {
    this._viewPort = value;
    this.resize();
  }

  get viewPort() {
    return this._viewPort;
  }

  get viewPortWidth() {
    return this._viewPort.width;
  }

  ngOnInit(): void {
    console.log("Init! " + this.numCols + ' x ');
    this.visibleCols = new Array(this.numCols);
    this.resize();
  }

  resize(): void {
    console.log("Viewport", this._viewPort);
    this.gridHeight = this.getRows(this.group) * this.rowHeight;
  }

  private getRows(group: GroupModel | undefined): number {
    if(!group) return 0;
    let numRows = 0;
    for(let subGroup of group.groups) {
      numRows += this.getRows(subGroup);
    }
    numRows += group.tracks.length;
    return numRows;
  }

}
