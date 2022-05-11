import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {BryntumSchedulerProComponent} from "@bryntum/schedulerpro-angular";
import {ProjectModel, SchedulerPro} from "@bryntum/schedulerpro/schedulerpro.lite.umd.js";
import {VcEvent} from "./model/vc-event";
import {VcResource} from "./model/vc-resource";
import {CellMenuItems} from "./util/cell-menu-items";

@Component({
  selector: 'app-bryntum-scheduler',
  templateUrl: './bryntum-scheduler.component.html',
  styleUrls: ['./bryntum-scheduler.component.css']
})
export class BryntumSchedulerComponent implements OnInit, AfterViewInit {

  @ViewChild(BryntumSchedulerProComponent) schedulerProComponent: BryntumSchedulerProComponent | undefined;
  scheduler: SchedulerPro | undefined;
  public startDate: Date = new Date(2022, 1, 1, 0, 0, 0, 0);
  // public startDate: Date = new Date(0);
  public endDate: Date = new Date(this.startDate.getTime() + 4 * 24 * 60 * 60 * 1000);

  id: number = 0;

  project: ProjectModel = new ProjectModel({
    eventModelClass: VcEvent,
    resourceModelClass: VcResource
  });

  features: any = {};

  ngAfterViewInit(): void {
    // store Bryntum Scheduler Pro instance
    this.scheduler = this.schedulerProComponent?.instance;
  }

  addResource() {
    const id = this.id++;

    this.scheduler?.resourceStore.add({
      id: id,
      name: 'Application ' + id
    });
  }

  addCustomEventGroup(parentId: number) {
    this.insertChild(parentId, 'group', 'Group ');
  }

  addEventSequence(parentId: number) {
    this.insertChild(parentId, 'event-sequence', 'Event Sequence ');
  }

  addEventTrack(parentId: number) {
    this.insertChild(parentId, 'track', 'Track ');
  }

  insertChild(parentId: number, type: string, nameTemplate: string) {
    const id = this.id++;
    const parent = this.scheduler?.resourceStore.getById(parentId) as VcResource;
    parent?.appendChild({
      id: id,
      name: nameTemplate + id,
      groupType: type
    });
    this.scheduler?.resourceStore.toggleCollapse(parent?.id, parent?.expanded === false);
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

  ngOnInit(): void {
    const that = this;

    this.features = {
      tree: true,
      cellMenu: {
        processItems({items, record}: any) {
          if (record.groupType === 'application') {
            items.newGroupItem = CellMenuItems.newGroupItem(that, record);
            items.newEventSequenceItem = CellMenuItems.newEventSequenceItem(that, record);
          } else if (record.groupType === 'group') {
            items.newGroupItem = CellMenuItems.newGroupItem(that, record);
            items.newEventSequenceItem = CellMenuItems.newEventSequenceItem(that, record);
          } else if (record.groupType === 'event-sequence') {
            items.newTrackItem = CellMenuItems.newTrackItem(that, record);
          }
        }
      }
    };
  }

}
