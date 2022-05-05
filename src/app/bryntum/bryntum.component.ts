import { Component, OnInit } from '@angular/core';
import {PresetManager, TaskModel} from "@bryntum/gantt/gantt.lite.umd.js";

@Component({
  selector: 'app-bryntum',
  templateUrl: './bryntum.component.html',
  styleUrls: ['./bryntum.component.css']
})
export class BryntumComponent implements OnInit {
  public tasks: TaskModel[] = [];
  private numTasks: number = 0;
  public startDate: Date = new Date(0);
  public endDate: Date = new Date (4 * 60 * 60 * 1000);
  public newPresets = PresetManager.records.slice(22, 24);

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



  constructor() { }

  ngOnInit(): void {
    console.log(PresetManager.records);
    this.addTask();
  }

  public addTask() {
    this.tasks.push(new TaskModel({
      name          : 'My task' + this.numTasks++
    }));
  }

}
