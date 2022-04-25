export interface GridDataModel {
  phases: number[];
  groups: GroupModel[];
}

export interface GroupModel {
  name: string;
  groups: GroupModel[];
  tracks: any[];
}
