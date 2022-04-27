import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RowGroupComponent } from './row-group.component';

describe('RowGroupComponent', () => {
  let component: RowGroupComponent;
  let fixture: ComponentFixture<RowGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RowGroupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RowGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
