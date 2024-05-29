import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimePeriodListComponent } from './time-period-list.component';

describe('TimePeriodListComponent', () => {
  let component: TimePeriodListComponent;
  let fixture: ComponentFixture<TimePeriodListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TimePeriodListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TimePeriodListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
