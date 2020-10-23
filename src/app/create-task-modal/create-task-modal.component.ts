import { Component, Input, HostListener, OnInit, OnDestroy } from '@angular/core';
import { InternalService } from '../internal.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { GlobalService } from '../global.service';
import { Users } from '../data.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-create-task-modal',
  templateUrl: './create-task-modal.component.html',
  styleUrls: ['./create-task-modal.component.scss']
})
export class CreateTaskModalComponent implements OnInit, OnDestroy {

  isVisible: boolean;
  @Input() userList: Users[];
  title: string;
  priority = ['low', 'medium', 'high'];
  validateForm!: FormGroup;
  subscriptions: Subscription = new Subscription();

  constructor(
    private internalService: InternalService,
    private globalService: GlobalService,
    private fb: FormBuilder) {}
  ngOnInit() {
    this.subscriptions.add(
      this.internalService.taskModalVisibility.subscribe(status => {
      this.isVisible = status;
    }));
    this.validateForm = this.fb.group({
      message: [null, [Validators.required]],
      due_date: [null, []],
      priority: [null, []],
      assigned_to: [null, []],
    });
    this.subscriptions.add(
      this.internalService.taskModalType.subscribe(res => {
        this.title = res
      })
    )
  }
  ngOnDestroy(){
    this.subscriptions.unsubscribe();
  }
  handleOk(): void {
    if(this.validateForm.valid && this.title === 'Create Task'){
      for (const i in this.validateForm.controls) {
        this.validateForm.controls[i].markAsDirty();
        this.validateForm.controls[i].updateValueAndValidity();
      }
      let postObject = this.validateForm.value;
      this.subscriptions.add(this.globalService.createTask(postObject).subscribe(res => {
        console.log(res);
      }))
      this.subscriptions.add(this.internalService.taskModalVisibility.next(false));
    }
    else if(this.validateForm.valid && this.title === 'Edit Task'){
      let taskId;
      this.subscriptions.add(this.internalService.taskId.subscribe(res => {
        console.log(res)
        taskId = res;
      }));
      for (const i in this.validateForm.controls) {
        this.validateForm.controls[i].markAsDirty();
        this.validateForm.controls[i].updateValueAndValidity();
      }
      let postObject = {...this.validateForm.value, taskid: taskId};
      this.subscriptions.add(this.globalService.createTask(postObject).subscribe(res => {
        console.log(res);
      }))
      this.internalService.taskModalVisibility.next(false);
    }
  }

  handleCancel() {
    //console.log('Button cancel clicked!');
    this.internalService.taskModalVisibility.next(false);
  }
}
