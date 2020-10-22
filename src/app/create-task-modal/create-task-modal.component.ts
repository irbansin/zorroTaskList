import { Component } from '@angular/core';
import { InternalService } from '../internal.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { GlobalService } from '../global.service';

@Component({
  selector: 'app-create-task-modal',
  templateUrl: './create-task-modal.component.html',
  styleUrls: ['./create-task-modal.component.scss']
})
export class CreateTaskModalComponent {

  isVisible: boolean;
  validateForm!: FormGroup;

  constructor(
    private internalService: InternalService,
    private globalService: GlobalService,
    private fb: FormBuilder) {}
  ngOnInit() {
    this.internalService.createTaskModalVisible.subscribe(status => {
      this.isVisible = status;
    });
    this.validateForm = this.fb.group({
      message: [null, [Validators.required]],
      due_date: [null, []],
      priority: [null, []],
      assigned_to: [null, []],
    });
  }

  handleOk(): void {
    for (const i in this.validateForm.controls) {
      this.validateForm.controls[i].markAsDirty();
      this.validateForm.controls[i].updateValueAndValidity();
    }
    console.log(this.validateForm.value)
    let postObject = this.validateForm.value;
    this.globalService.createTask(postObject).subscribe(res => {
      console.log(res);
    })
    this.internalService.createTaskModalVisible.next(false);
  }

  handleCancel(): void {
    console.log('Button cancel clicked!');
    this.internalService.createTaskModalVisible.next(false);
  }
}
