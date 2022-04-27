import {Component, Input, OnInit} from '@angular/core';
import {StickyGridGroup} from "../model/sticky-grid-group";

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
  public scale: string[] = [];

  constructor() { }

  ngOnInit(): void {

  }
}
