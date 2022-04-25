import {Component, ElementRef, HostListener, AfterViewInit, ViewChild} from '@angular/core';
import {GridDataModel} from "../../shared/custom-grid/model/grid-data.model";

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css']
})
export class GridComponent implements AfterViewInit {
  public viewPort: {left: number, top: number, width: number, height: number} = {left: 0, top: 0, width: 0, height: 0};

  @ViewChild('resizeAndScroll')
  private el: ElementRef | undefined;

  public gridData: GridDataModel = {
    phases: [1, 5, 1],
    groups: [
      {
        name: "App 1",
        color: 'red',
        level: 1,
        groups: [
          {
            name: "UDP 1",
            color: 'orange',
            level: 2,
            groups: [],
            tracks: [{name: "udp1"}, {name: "udp2"}, {name: "udp3"}]
          },
          {
            name: "TCP 1",
            color: 'brown',
            level: 2,
            groups: [],
            tracks: [{name: "tcp1"}, {name: "tcp2"}, {name: "tcp3"}, {name: "tcp4"}]
          },
        ],
        tracks: [{name: "ax"}, {name: "ay"}, {name: "az"}]
      },
      {
        name: "App 2",
        color: 'blue',
        level: 1,
        groups: [
          {
            name: "UDP 2",
            color: 'violet',
            level: 2,
            groups: [],
            tracks: [{name: "udp4"}, {name: "udp5"}, {name: "udp6"}]
          },
          {
            name: "TCP 2",
            color: 'pink',
            level: 2,
            groups: [],
            tracks: [{name: "tcp5"}, {name: "tcp6"}, {name: "tcp7"}, {name: "tcp8"}]
          },
        ],
        tracks: []
      },
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
