import { Component, OnInit } from '@angular/core';
import {
  AssignmentModel,
  Column,
  EventModel, PresetManager, ProjectModel,
  ResourceCalendarColumn,
  ResourceInfoColumn,
  ResourceModel
} from "@bryntum/gantt/gantt.lite.umd.js";

@Component({
  selector: 'app-bryntum-scheduler',
  templateUrl: './bryntum-scheduler.component.html',
  styleUrls: ['./bryntum-scheduler.component.css']
})
export class BryntumSchedulerComponent implements OnInit {
  public startDate: Date = new Date(0);
  public endDate: Date = new Date (4 * 60 * 60 * 1000);
  public presets = [
    // PresetManager.records[23],
    {
      id              : 'myNewPreset',
      base            : 'secondAndMinute', // Based on an existing preset
      columnLinesFor  : 0,
      shiftIncrement: 10,
      shiftUnit: "second",
      timeResolution: {
        unit: "second",
        increment:  1
      },
      headers : [
        {
          unit       : 'minute',
          dateFormat : 'hh:mm'
        },
        {
          unit       : 'second',
          dateFormat : 'ss\'\'',
          increment: 10
        }
      ]
    }
  ];

  columns: ResourceInfoColumn[] = [
    // new ResourceInfoColumn({
    //   field: "name",
    //   text: "name"
    // })
  ];

  id: number = 0;

  events: EventModel[] = [];
  resources: ResourceModel[] = [];
  assignments: AssignmentModel[] = [];
  project: ProjectModel = new ProjectModel({

  });

  constructor() { }

  ngOnInit(): void {
    this.addEvent(this.id++);
  }

  addEvent(id: number): void {
    let resource = new ResourceModel({
      id: "r" + id,
      name: "Resource " + id
    });
    // let resource = this.resources[0];

    this.resources.push(resource)


    // const event = new EventModel({
    //   id: "e" + id,
    //   name: "Event " + id,
    //   startDate: new Date(0),
    //   endDate: new Date(8000)
    // });
    //
    // this.events.push(event);
    //
    // this.assignments.push(
    //   new AssignmentModel(
    //   {resource: "r0", event: "e0"})
    // );

  }

}
