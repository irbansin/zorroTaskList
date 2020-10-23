import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InternalService {

  taskModalVisibility = new Subject<boolean>();
  taskModalType = new Subject<string>();
  taskId = new Subject<number>();
  constructor() { }


}
