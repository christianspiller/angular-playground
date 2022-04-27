import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StickyGridComponent } from './sticky-grid.component';

describe('StickyGridComponent', () => {
  let component: StickyGridComponent;
  let fixture: ComponentFixture<StickyGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StickyGridComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StickyGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
