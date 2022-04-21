import {Component, ElementRef, HostListener, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css']
})
export class GridComponent implements OnInit {
  colWidth: number = 20;

  @ViewChild('resizeAndScroll')
  private el: ElementRef | undefined;

  constructor() { }

  ngOnInit(): void {
  }

  onScroll($event: Event) {
    let elem = $event.target as HTMLElement;
    console.log('x: ' + elem.scrollLeft + ', y: ' + elem.scrollTop + ', w: ' + elem.offsetWidth + ', h: ' + elem.offsetHeight);
  }

  @HostListener('window:resize', ['$event'])
  onResize() {
    let elem = this.el?.nativeElement;
    console.log('x: ' + elem.scrollLeft + ', y: ' + elem.scrollTop + ', w: ' + elem.offsetWidth + ', h: ' + elem.offsetHeight);
  }
}
