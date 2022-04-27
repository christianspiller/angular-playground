import {Component, ElementRef, HostListener, AfterViewInit, ViewChild} from '@angular/core';
import {StickyGridPhase} from "../../shared/sticky-grid/model/sticky-grid-phase";
import {StickyGridGroup} from "../../shared/sticky-grid/model/sticky-grid-group";

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css']
})
export class GridComponent implements AfterViewInit {
  public viewPort: {left: number, top: number, width: number, height: number} = {left: 0, top: 0, width: 0, height: 0};

  @ViewChild('resizeAndScroll')
  private el: ElementRef | undefined;

  // public gridData: GridDataModel = {
  public phases: StickyGridPhase[] = [
    {name: "phase1", zoomX: 1, start: 0, stop: 60},
    {name: "phase2", zoomX: 2, start: 60, stop: 140},
    {name: "phase3", zoomX: 1, start: 140, stop: 160}
  ];
  public groups: StickyGridGroup[] = [
      {
        name: "App 1",
        color: 'red',
        level: 1,
        subGroups: [
          {
            name: "UDP 1",
            color: 'orange',
            level: 2,
            subGroups: [],
            rows: [{name: "udp1", data: [{start: 1, stop: 5}]}, {name: "udp2"}, {name: "udp3"}]
          },
          {
            name: "TCP 1",
            color: 'brown',
            level: 2,
            subGroups: [],
            rows: [{name: "tcp1"}, {name: "tcp2"}, {name: "tcp3"}, {name: "tcp4"}]
          },
        ],
        rows: [{name: "ax"}, {name: "ay"}, {name: "az"}]
      },
      {
        name: "App 2",
        color: 'blue',
        level: 1,
        subGroups: [
          {
            name: "UDP 2",
            color: 'violet',
            level: 2,
            subGroups: [],
            rows: [{name: "udp4"}, {name: "udp5"}, {name: "udp6"}]
          },
          {
            name: "TCP 2",
            color: 'pink',
            level: 2,
            subGroups: [],
            rows: [{name: "tcp5"}, {name: "tcp6"}, {name: "tcp7"}, {name: "tcp8"}]
          },
        ],
        rows: []
      },
    ];

  constructor() { }

  ngAfterViewInit(): void {
    this.setViewPort();
  }

  onScroll() {
    this.setViewPort();
  }

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.setViewPort();
  };

  setViewPort() {
    let elem = this.el?.nativeElement;
    // console.log('x: ' + elem.scrollLeft + ', y: ' + elem.scrollTop + ', w: ' + elem.offsetWidth + ', h: ' + elem.offsetHeight);
    this.viewPort = {left: elem.scrollLeft, top: elem.scrollTop, width: elem.offsetWidth, height: elem.offsetHeight}
  }


  increaseZoom(phaseId: number) {
    // this.gridData.phases[phaseId] *=1.2;
    this.phases[phaseId].zoomX *= 1.2;
  }

  decreaseZoom(phaseId: number) {
    this.phases[phaseId].zoomX *= 0.8;
  }
}
