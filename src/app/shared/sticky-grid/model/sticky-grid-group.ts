import {StickyGridRow} from "./sticky-grid-row";

export interface StickyGridGroup {
  name: string;
  color: string;
  level: number;
  subGroups: StickyGridGroup[];
  rows: StickyGridRow[];
}
