import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BryntumComponent } from './bryntum.component';

describe('BryntumComponent', () => {
  let component: BryntumComponent;
  let fixture: ComponentFixture<BryntumComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BryntumComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BryntumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
