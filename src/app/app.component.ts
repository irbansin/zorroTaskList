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
  appUsersList = [];

  constructor(
    private globalService: GlobalService,
    private internalService: InternalService) {
  }
  ngOnInit() {
    this.initializeUsersList();
  }
  initializeUsersList() {
    this.globalService.getUserList().subscribe((res)=>{
      this.appUsersList = res['users'];
      console.log(this.appUsersList);
    });
  }
  createTaskDialogToggle() {
    this.internalService.createTaskModalVisible.next(!this.createTaskModalStatus);
  }
}
