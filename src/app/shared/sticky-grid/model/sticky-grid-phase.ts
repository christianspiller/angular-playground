export interface StickyGridPhase {
  name: string;
  zoomX: number;
  start: number;
  stop: number;
  scales: StickyGridVisibleScale[]
}

export interface StickyGridVisibleScale {
  length: number;
  elements: StickyGridScaleElement[];
}

export interface StickyGridScaleElement {
  index: number;
  value: string;
}
