import {ResourceModel} from "@bryntum/schedulerpro/schedulerpro.lite.umd.js";

export class VcResource extends ResourceModel {

  static override get fields() {
    return [
      { name: 'groupType', defaultValue: 'application' },
      { name: 'system', defaultValue: 'ping'},
      { name: 'device', defaultValue: 'Ubuntu'}
    ];
  }

}
