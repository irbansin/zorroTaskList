import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { TaskObject, TaskUpdateObject, DeleteTaskObject, Users } from './data.model';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {

  taskList: any;
  constructor(private http: HttpClient) {
  }

  getTaskList(): Observable<TaskObject[]> {
    let header = new HttpHeaders().set(
      "AuthToken",
      "3UQLDSANnFDoIDMGMVjuanthCUcQopeW"
    );
    return this.http.get<any[]>('https://devza.com/tests/tasks/list', {headers:header})
  }
  getUserList(): Observable<Users[]> {
    let header = new HttpHeaders().set(
      "AuthToken",
      "3UQLDSANnFDoIDMGMVjuanthCUcQopeW"
    );
    return this.http.get<any[]>('https://devza.com/tests/tasks/listusers', {headers:header})
  }
  createTask(postObject): Observable<any[]> {
    let header = new HttpHeaders().set(
      "AuthToken",
      "3UQLDSANnFDoIDMGMVjuanthCUcQopeW"
    );
    return this.http.post<any[]>('http://devza.com/tests/tasks/create', postObject, {headers:header})
  }
  updateTask(postObject: TaskUpdateObject): Observable<any[]> {
    let header = new HttpHeaders().set(
      "AuthToken",
      "3UQLDSANnFDoIDMGMVjuanthCUcQopeW"
    );
    return this.http.post<any[]>('http://devza.com/tests/tasks/update', postObject, {headers:header})
  }
  deleteTask(postObject: DeleteTaskObject): Observable<any[]> {
    let header = new HttpHeaders().set(
      "AuthToken",
      "3UQLDSANnFDoIDMGMVjuanthCUcQopeW"
    );
    return this.http.post<any[]>('http://devza.com/tests/tasks/delete', postObject, {headers:header})
  }
}
