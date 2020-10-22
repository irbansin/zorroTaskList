import { Component, OnInit } from '@angular/core';
import { GlobalService } from 'src/app/global.service';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {


  constructor(private globalService: GlobalService) { }
  tasksList = [];
  high = [
    'Get to work',
    'Pick up groceries',
    'Go home',
    'Fall asleep'
  ];

  medium = [
    'Get up',
    'Brush teeth',
    'Take a shower',
    'Check e-mail',
    'Walk dog'
  ];

  low = [
    'Play game',
    'Make guns',
    'Read about laws',
    'think',
    'Disturb your sibllings'
  ];
  ngOnInit() {
    this.initializeTasksList()
  }
  initializeTasksList() {
    this.globalService.getTaskList().subscribe((res)=>{
      this.tasksList = res['tasks'];
    });
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
}
