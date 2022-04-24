import {AfterViewInit, Component, ElementRef, ViewChild, ViewEncapsulation} from '@angular/core';
import "dhtmlx-gantt";
import {gantt} from "dhtmlx-gantt";

@Component({
  selector: 'app-gantt',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './gantt.component.html',
  styleUrls: ['./gantt.component.css'],
  //providers: [TaskService, LinkService],
})
export class GanttComponent implements AfterViewInit {
  @ViewChild("gantt_here") ganttContainer: ElementRef | undefined;

  constructor() { }

  ngAfterViewInit(): void {
    console.log(this.ganttContainer);

    gantt.config.start_date = new Date(0);
    gantt.config.end_date = new Date(1000000);

    gantt.date['second_start'] = function(date: Date){
      return new Date(date);
    };

    gantt.date['add_second'] = function(date: Date, inc: number){
      return date.setSeconds(date.getSeconds() + inc);
    };
    gantt.config.scales = [
      { unit: "second", step: 1, format: function (date: Date) {
        return '' + Math.round(date.getTime() / 1000);
        }
      },
      {unit:"minute", step: 1, format:"d%d %H:%m"},
      {unit:"hour", step: 1, format: "d%d %H"}
    ];

    this.zoomSettings();
    this.taskTypes();
    gantt.init(this.ganttContainer?.nativeElement);
  }

  private zoomSettings() {
    const zoomConfig = {
      useKey: "ctrlKey",
      trigger: "wheel",
      element: function(){
        const g = gantt as any;
        return g.$root.querySelector(".gantt_task");
      },
      levels: [
        {
          name:"minute",
          scale_height: 27,
          min_column_width:80,
          scales:[
            { unit: "second", step: 1, format: function (date: Date) {
                return '' + Math.round(date.getTime() / 1000);
              }
            },
            {unit:"minute", step: 1, format:"d%d %H:%m"},
          ]
        },
        {
          name:"hour",
          scale_height: 50,
          min_column_width:50,
          scales:[
            {unit:"minute", step: 1, format:"d%d %H:%m"},
            {unit:"hour", step: 1, format: "d%d %H"}
          ]
        }
      ]
    };

    gantt.ext.zoom.init(zoomConfig);
  }

  private taskTypes() {
    gantt.config.types.application = "application";
    gantt.locale.labels['type_application'] = "Anwendung";

    gantt.config.lightbox.application_sections = [
      {name:"title", height:20, map_to:"text", type:"textarea", focus:true},
      {name:"details", height:70, map_to: "details", type: "textarea"},
      {name:"type", type:"typeselect", map_to:"type"}];
    gantt.locale.labels['section_title'] = "Subject";
    gantt.locale.labels['section_details'] = "Details";

    gantt.config.type_renderers[gantt.config.types.application]=function(task: any){
      const main_el = document.createElement("div");
      main_el.setAttribute(gantt.config.task_attribute, task.id);
      const size = gantt.getTaskPosition(task, new Date(0), new Date(1000000));
      main_el.innerHTML = [
        "<div class='project-left'></div>",
        "<div class='project-right'></div>"
      ].join('');
      main_el.className = "custom-project";

      main_el.style.left = size.left + "px";
      main_el.style.top = size.top + 7 + "px";
      main_el.style.width = size.width + "px";

      return main_el;
    };
  }
}
