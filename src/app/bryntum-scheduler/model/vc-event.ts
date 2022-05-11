import {EventModel} from "@bryntum/schedulerpro/schedulerpro.lite.umd.js";

export class VcEvent extends EventModel {

  static override get fields() {
    return [
      { name : 'durationUnit', dataSource: 'durationUnit', defaultValue: 'second' }
    ];
  }

}
