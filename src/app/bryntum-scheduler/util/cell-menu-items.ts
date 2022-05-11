import {BryntumSchedulerComponent} from "../bryntum-scheduler.component";

export class CellMenuItems {
  static newGroupItem (callback: BryntumSchedulerComponent, record: any) {
    return {
      text: 'add new Group',
      icon: 'b-fa b-fa-plus',
      weight: 200,
      onItem: () => {
        callback.addCustomEventGroup(record.id);
      }
    }
  }

  static newEventSequenceItem (callback: BryntumSchedulerComponent, record: any) {
    return {
      text: 'add new Event Sequence',
      icon: 'b-fa b-fa-plus',
      weight: 200,
      onItem: () => {
        callback.addEventSequence(record.id);
      }
    }
  }

  static newTrackItem (callback: BryntumSchedulerComponent, record: any) {
    return {
      text: 'add new Track',
      icon: 'b-fa b-fa-plus',
      weight: 200,
      onItem: () => {
        callback.addEventTrack(record.id);
      }
    }
  }
}
