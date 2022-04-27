import {Component, Input, OnInit} from '@angular/core';
import {StickyGridPhase} from "./model/sticky-grid-phase";
import {StickyGridGroup} from "./model/sticky-grid-group";

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
  public rowHeight: number = 25;


  constructor() { }

  ngOnInit(): void {
  }


}
