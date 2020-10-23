import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskButtonGroupComponent } from './task-button-group.component';

describe('TaskButtonGroupComponent', () => {
  let component: TaskButtonGroupComponent;
  let fixture: ComponentFixture<TaskButtonGroupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaskButtonGroupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskButtonGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
