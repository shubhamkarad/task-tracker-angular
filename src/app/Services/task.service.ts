import { Injectable, TRANSLATIONS } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Task} from '../Task';
import { Observable } from 'rxjs';

  const httpOptions = {
    headers: new HttpHeaders({'Content-Type' : 'application/json'})
  }
@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private apiUrl = "http://localhost:5200/tasks";
  
  getTasks(): Observable<Task[]>{
    return this.http.get<Task[]>(this.apiUrl);
  } 
  deleteTask(task: Task):Observable<Task>{
    const url = `${this.apiUrl}/${task.id}`;
    return this.http.delete<Task>(url);
  }
  UpdateReminder(task: Task):Observable<Task>{
     const url = `${this.apiUrl}/${task.id}`;
     return this.http.put<Task>(url, task,  httpOptions);
  }
  addTask(task:Task):Observable<Task>{
    return this.http.post<Task>(this.apiUrl, task, httpOptions); 
  }
  constructor(private http: HttpClient) { }
}
