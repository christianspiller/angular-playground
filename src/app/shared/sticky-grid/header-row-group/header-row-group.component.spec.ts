import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderRowGroupComponent } from './header-row-group.component';

describe('HeaderRowGroupComponent', () => {
  let component: HeaderRowGroupComponent;
  let fixture: ComponentFixture<HeaderRowGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderRowGroupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderRowGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
