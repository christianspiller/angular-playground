import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-custom-grid',
  templateUrl: './custom-grid.component.html',
  styleUrls: ['./custom-grid.component.css'],
})
export class CustomGridComponent implements OnInit{
  public numCols = 100;
  public numRows = 4;
  public rowHeight = 50;
  private _colWidth = 50;

  public gridWidth = this.numCols * this._colWidth;
  public gridHeight = this.numRows * this.rowHeight;
  public visibleRows: Array<any> | undefined;

  private _zoomX = 1;
  private _viewPort: {left: number, top: number, width: number, height: number} = {left: 0, top: 0, width: 0, height: 0};

  @Input() set zoomX(value: number) {
    this._zoomX = value;
    this.resize();
  }

  @Input() set viewPort(value: {left: number, top: number, width: number, height: number}) {
    this._viewPort = value;
    this.resize();
  }


  ngOnInit(): void {
    console.log("Init!");
    this.visibleRows = new Array(this.numCols);
    this.resize();
  }

  resize(): void {
    console.log("Viewport", this._viewPort);
    this.gridWidth = this._viewPort.width * this._zoomX;
  }

}
