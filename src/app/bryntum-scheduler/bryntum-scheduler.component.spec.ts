import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BryntumSchedulerComponent } from './bryntum-scheduler.component';

describe('BryntumSchedulerComponent', () => {
  let component: BryntumSchedulerComponent;
  let fixture: ComponentFixture<BryntumSchedulerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BryntumSchedulerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BryntumSchedulerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
