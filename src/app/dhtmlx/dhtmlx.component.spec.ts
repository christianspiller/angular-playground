import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DhtmlxComponent } from './dhtmlx.component';

describe('DhtmlxComponent', () => {
  let component: DhtmlxComponent;
  let fixture: ComponentFixture<DhtmlxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DhtmlxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DhtmlxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
