import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { Task } from './data.model';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {

  taskList: any;
  constructor(private http: HttpClient) {
  }

  getTaskList(): Observable<Task[]> {
    let header = new HttpHeaders().set(
      "AuthToken",
      "3UQLDSANnFDoIDMGMVjuanthCUcQopeW"
    );
    return this.http.get<any[]>('https://devza.com/tests/tasks/list', {headers:header})
  }
  getUserList(): Observable<any[]> {
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
}
