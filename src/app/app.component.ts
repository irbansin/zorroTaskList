import { Component } from '@angular/core';
import { GlobalService } from './global.service';
import { InternalService } from './internal.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  isCollapsed = false;
  taskModalStatus = false;
  taskModalType = 'Create Task';
  appUsersList = [];
  subscriptions: Subscription = new Subscription();

  constructor(
    private globalService: GlobalService,
    private internalService: InternalService) {
  }
  ngOnInit() {
    this.initializeUsersList();
  }
  initializeUsersList() {
    this.subscriptions.add(
      this.globalService.getUserList().subscribe((res)=>{
        this.appUsersList = res['users'];
      }));
  }
  createTaskDialogToggle() {
    this.internalService.taskModalVisibility.next(!this.taskModalStatus);
    this.internalService.taskModalType.next(this.taskModalType);
  }
}
