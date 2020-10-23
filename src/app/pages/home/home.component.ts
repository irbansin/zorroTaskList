import { Component, OnInit } from '@angular/core';
import { GlobalService } from 'src/app/global.service';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import { InternalService } from 'src/app/internal.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  subscriptions: Subscription = new Subscription();

  constructor(private globalService: GlobalService,
              private internalService: InternalService) { }
  taskModalStatus = false;
  taskModalType = 'Edit Task';
  tasksList = [];
  high = [];
  medium = [];
  low = [];
  ngOnInit() {
    this.initializeTasksList()
  }
  initializeTasksList() {
    this.subscriptions.add(
      this.globalService.getTaskList().subscribe((res)=>{
        this.tasksList = res['tasks'];
        this.tasksList.map(item => {
          if(item.priority === '1') {
            this.low.push(item);
          }
          if(item.priority === '2') {
            this.medium.push(item);
          }
          if(item.priority === '3') {
            this.high.push(item);
          }
        });
      }));
  }

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
      console.log(event.container.data, event.previousIndex, event.currentIndex)
    } else {
      transferArrayItem(event.previousContainer.data,
                        event.container.data,
                        event.previousIndex,
                        event.currentIndex);
      console.log(event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex)
    }
  }
  updateTask(id){
    console.log(id)
    this.internalService.taskModalVisibility.next(!this.taskModalStatus);
    this.internalService.taskModalType.next(this.taskModalType);
    this.internalService.taskId.next(id)
  }
  deleteTask(id){
    console.log(id)
    this.subscriptions.add(
    this.globalService.deleteTask(id).subscribe(res => {console.log(res)}))
  }
}
