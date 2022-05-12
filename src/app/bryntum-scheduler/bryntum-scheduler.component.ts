import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {BryntumSchedulerProComponent} from "@bryntum/schedulerpro-angular";
import {ProjectModel, SchedulerPro} from "@bryntum/schedulerpro/schedulerpro.lite.umd.js";
import {VcEvent} from "./model/vc-event";
import {VcResource} from "./model/vc-resource";
import {CellMenuItems} from "./util/cell-menu-items";
import {SvgLines} from "./util/svg-lines";

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

  cellMenuFeature: any = {};

  ngAfterViewInit(): void {
    // store Bryntum Scheduler Pro instance
    this.scheduler = this.schedulerProComponent?.instance;
  }

  addApplication() {
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
    const id = this.insertChild(parentId, 'track', 'Track ');
    this.addEvent(id);
  }

  insertChild(parentId: number, type: string, nameTemplate: string): number {
    const id = this.id++;
    const parent = this.scheduler?.resourceStore.getById(parentId) as VcResource;
    parent?.appendChild({
      id: id,
      name: nameTemplate + id,
      groupType: type
    });
    // this.scheduler?.resourceStore.toggleCollapse(parent?.id, parent?.expanded === false); :-(
    return id;
  }

  addEvent(resourceId: number) {
    const id = this.id++;
    this.scheduler?.eventStore.add({
      id: id,
      name: 'Event ' + id,
      startDate: this.startDate,
      duration: 50,
      durationUnit: 'second'
    });

    // for(let resource of this.scheduler?.resources as any[]) {
    //   if (resource.groupType === groupType) {
        this.scheduler?.assignmentStore.add({
          event: id,
          resource: resourceId
        });
    //   }
    // }
  }

  preventScrollOutside($event: any) {
    $event.to.options.startDate = new Date(0);
    $event.to.options.endDate = new Date(this.endDate);
  }

  ngOnInit(): void {
    const that = this;

    this.cellMenuFeature = {
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
    };
  }

  startTime: Date = new Date();
  eventRenderer: any = function eventRenderer({ eventRecord, resourceRecord, renderData }: any) {
    // renderData.style = 'color:white';                 // You can use inline styles too.
    //
    // // Property names with truthy values are added to the resulting elements CSS class.
    // renderData.cls.isImportant = this.isImportant(eventRecord);
    // renderData.cls.isModified = eventRecord.isModified;
    //
    // // Remove a class name by setting the property to false
    // renderData.cls[scheduler.generatedIdCls] = false;
    //
    // // Or, you can treat it as a string, but this is less efficient, especially
    // // if your renderer wants to *remove* classes that may be there.
    // renderData.cls += ' extra-class';
    if(resourceRecord.groupType === 'application') {
      console.log(renderData);
      return `<span>${eventRecord.name}</span><svg xmlns="http://www.w3.org/2000/svg" width="${renderData.width}" height="30" viewBox="0 0 ${renderData.width} 30">` +
        `<path d="M173.2 140L0 150L86.6 0z" fill="#ff0080"/>` +
        '</svg>'
    } else if(resourceRecord.groupType === 'track') {
      console.log(renderData);
      return `<svg xmlns="http://www.w3.org/2000/svg" width="${renderData.width}" height="30" viewBox="0 0 ${renderData.width} 30">` +
        SvgLines.getPing() +
        '</svg>'
    }

    return null;
  };

  onEventDrag($event: any, type: string) {
    if(type === 'event saved') {
      const event = $event.eventRecord.originalData as VcEvent;
      console.log(type, event);
    } else if (type==='before save'){
      $event.eventRecord.originalData.id = this.id++;
    } else if (type==='resize end'){
    } else if (type==='drag start'){
      console.log(type, $event);
      this.startTime = $event.eventRecords[0].startDate;
    } else if(type==='drag stop'){
      let stopTime = $event.eventRecords[0].startDate;
      let diff = stopTime.getTime() - this.startTime.getTime();

      for (let child of $event.resourceRecord.children || []) {
        let eventsForResource = this.scheduler?.assignmentStore.getEventsForResource(child.originalData.id) || [];

        for(let event of eventsForResource) {
          event.startDate = new Date((event.startDate as Date).getTime() + diff);
        }
      }
    }

  }
}
