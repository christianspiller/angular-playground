import {AfterViewInit, Component, ViewChild} from '@angular/core';
// import {ProjectModel, SchedulerPro} from "@bryntum/gantt/gantt.lite.umd.js";
import {BryntumSchedulerProComponent} from "@bryntum/schedulerpro-angular";
import {ProjectModel, SchedulerPro} from "@bryntum/schedulerpro/schedulerpro.lite.umd.js";
import {VcEvent} from "./model/vc-event";

@Component({
  selector: 'app-bryntum-scheduler',
  templateUrl: './bryntum-scheduler.component.html',
  styleUrls: ['./bryntum-scheduler.component.css']
})
export class BryntumSchedulerComponent implements AfterViewInit {

  @ViewChild(BryntumSchedulerProComponent) schedulerProComponent: BryntumSchedulerProComponent | undefined;
  scheduler: SchedulerPro|undefined;
  public startDate: Date = new Date(2022, 1, 1, 0, 0, 0, 0);
  // public startDate: Date = new Date(0);
  public endDate: Date = new Date (this.startDate.getTime() + 4 * 24 * 60 * 60 * 1000);

  id: number = 0;

  project: ProjectModel = new ProjectModel({
    eventModelClass: VcEvent
  });

  constructor() { }

  ngAfterViewInit(): void {
    // store Bryntum Scheduler Pro instance
    this.scheduler = this.schedulerProComponent?.instance;
  }

  addResource(parent: number|undefined) {
    const id = this.id++;

    if(parent === undefined) {
      this.scheduler?.resourceStore.add({
        id: id,
        name: 'Resource ' + id,
        children: [
          {id: id + 100,
          name: 'Child Resource ' + (id + 100)}
        ]
      });
    } else {
      this.scheduler?.resourceStore.getAt(0).insertChild({
        id: id,
        name: 'Resource ' + id
      });
    }

    console.log(this.scheduler?.resources);
  }

  addEvent() {
    const id = this.id++;
    this.scheduler?.eventStore.add({
      id: id,
      name: 'Event ' + id,
      startDate: this.startDate,
      duration: 8,
      durationUnit: 'second'
    });

    this.scheduler?.assignmentStore.add({
      event: id,
      resource: 0
    });

    console.log(this.scheduler?.events);
  }

  preventScrollOutside($event: any) {
    $event.to.options.startDate = new Date(0);
    $event.to.options.endDate = new Date(this.endDate);
  }

}
