import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditTimeLimitComponent } from './add-edit-time-limit.component';

describe('AddEditTimeLimitComponent', () => {
  let component: AddEditTimeLimitComponent;
  let fixture: ComponentFixture<AddEditTimeLimitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditTimeLimitComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddEditTimeLimitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
