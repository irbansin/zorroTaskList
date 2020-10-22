import { Component } from '@angular/core';
import { GlobalService } from './global.service';
import { InternalService } from './internal.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  isCollapsed = false;
  createTaskModalStatus = false;

  constructor(
    private globalService: GlobalService,
    private internalService: InternalService) {
  }
  ngOnInit() {
    this.initializeTasksList();
    this.initializeUsersList();
  }
  initializeTasksList() {
    this.globalService.getTaskList().subscribe((res)=>{
      console.log(res);
    });
  }
  initializeUsersList() {
    this.globalService.getUserList().subscribe((res)=>{
      console.log(res);
    });
  }
  createTaskDialogToggle() {
    this.internalService.createTaskModalVisible.next(!this.createTaskModalStatus);
  }
}
