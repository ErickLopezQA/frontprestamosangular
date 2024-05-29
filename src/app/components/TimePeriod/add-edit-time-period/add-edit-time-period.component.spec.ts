import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditTimePeriodComponent } from './add-edit-time-period.component';

describe('AddEditTimePeriodComponent', () => {
  let component: AddEditTimePeriodComponent;
  let fixture: ComponentFixture<AddEditTimePeriodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditTimePeriodComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddEditTimePeriodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
