import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-custom-grid',
  templateUrl: './custom-grid.component.html',
  styleUrls: ['./custom-grid.component.css'],
})
export class CustomGridComponent implements OnInit{
  get phases(): number[] {
    return this._phases;
  }
  public numCols = 60;
  @Input()
  public numRows = 4;
  public rowHeight = 50;

  public gridWidth = 0;
  public gridHeight = 0;
  public visibleRows: Array<any> | undefined;

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

  get viewPortWidth() {
    return this._viewPort.width;
  }


  ngOnInit(): void {
    console.log("Init! " + this.numCols + ' x ' + this.numRows);
    this.visibleRows = new Array(this.numCols);
    this.resize();
  }

  resize(): void {
    console.log("Viewport", this._viewPort);
    this.gridHeight = this.numRows * this.rowHeight;
  }

}
