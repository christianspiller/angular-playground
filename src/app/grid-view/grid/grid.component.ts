import {Component, ElementRef, HostListener, AfterViewInit, ViewChild} from '@angular/core';
import {GridDataModel} from "../../shared/custom-grid/model/grid-data.model";

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css']
})
export class GridComponent implements AfterViewInit {
  public zoomX: number = 1;
  public viewPort: {left: number, top: number, width: number, height: number} = {left: 0, top: 0, width: 0, height: 0};

  @ViewChild('resizeAndScroll')
  private el: ElementRef | undefined;

  public gridData: GridDataModel = {
    phases: [1, 5, 1],
    groups: [
      {
        name: "App 1",
        groups: [],
        tracks: [{name: "x"}, {name: "y"}, {name: "z"}]
      }
    ]
  };

  constructor() { }

  ngAfterViewInit(): void {

    console.log(this.el);
    this.setViewPort();
  }

  onScroll() {
    console.log("Scroll!");
    this.setViewPort();
  }

  @HostListener('window:resize', ['$event'])
  onResize() {
    console.log("Resize!");
    this.setViewPort();
  };

  setViewPort() {
    let elem = this.el?.nativeElement;
    console.log('x: ' + elem.scrollLeft + ', y: ' + elem.scrollTop + ', w: ' + elem.offsetWidth + ', h: ' + elem.offsetHeight);
    this.viewPort = {left: elem.scrollLeft, top: elem.scrollTop, width: elem.offsetWidth, height: elem.offsetHeight}
  }


  increaseZoom(phaseId: number) {
    this.gridData.phases[phaseId] *=1.2;
  }

  decreaseZoom(phaseId: number) {
    this.gridData.phases[phaseId] *=0.8;
  }
}
