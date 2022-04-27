import {Component, Input, OnInit} from '@angular/core';
import {StickyGridGroup} from "../model/sticky-grid-group";

@Component({
  selector: 'app-header-row-group',
  templateUrl: './header-row-group.component.html',
  styleUrls: ['./header-row-group.component.css']
})
export class HeaderRowGroupComponent implements OnInit {
  @Input()
  public group: StickyGridGroup = {color: "", subGroups: [], level: 0, name: "", rows: []};
  @Input()
  public rowHeight: number = 25;

  constructor() { }

  ngOnInit(): void {
  }

}
