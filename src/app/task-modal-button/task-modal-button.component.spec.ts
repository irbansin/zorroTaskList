import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskModalButtonComponent } from './task-modal-button.component';

describe('TaskModalButtonComponent', () => {
  let component: TaskModalButtonComponent;
  let fixture: ComponentFixture<TaskModalButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaskModalButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskModalButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
