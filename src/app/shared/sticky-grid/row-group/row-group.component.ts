import {Component, Input, OnInit} from '@angular/core';
import {StickyGridGroup} from "../model/sticky-grid-group";
import {StickyGridPhase} from "../model/sticky-grid-phase";

@Component({
  selector: 'app-row-group',
  templateUrl: './row-group.component.html',
  styleUrls: ['./row-group.component.css']
})
export class RowGroupComponent implements OnInit {
  @Input()
  public group: StickyGridGroup = {color: "", subGroups: [], level: 0, name: "", rows: []};
  @Input()
  public rowHeight: number = 25;

  @Input()
  public phase: StickyGridPhase = {name: "", start: 0, stop: 0, zoomX: 0, scales: []}

  constructor() { }

  ngOnInit(): void {

  }

  filter(phase: StickyGridPhase, data?: { start: number; stop: number }[]): { start: number; stop: number }[] {
    if(!data) return [];

    let filtered: { start: number; stop: number }[] = [];

    for(let item of data) {
      if(item.start < phase.stop && item.stop >= phase.start) {
        filtered.push(item);
      }
    }
    return filtered;
  }
}
