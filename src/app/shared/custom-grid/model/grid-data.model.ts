export interface GridDataModel {
  phases: number[];
  groups: GroupModel[];
}

export interface GroupModel {
  name: string;
  color: string;
  level: number;
  groups: GroupModel[];
  tracks: TrackModel[];
}

export interface TrackModel {
  name: string;
}
