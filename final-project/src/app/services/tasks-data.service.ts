import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Task } from '../common/interfaces';
import { beginTasks } from '../common/constants';

@Injectable({
  providedIn: 'root'
})
export class TasksDataService {
  private readonly tasks$ = new BehaviorSubject<Task[]>(beginTasks);
  
  public get tasks(): Observable<Task[]> {
    return this.tasks$.asObservable();
  }

  public changeTaskByDrop(taskId: number, statusId: number, statusPosition: number): void {
    const tasksList = this.tasks$.value;
    const index = tasksList.findIndex(task => task.id === taskId);
    tasksList
      .filter(task => task.statusId === statusId)
      .filter(task => task.statusPosition >= statusPosition)
      .forEach(task => task.statusPosition += 1);
    tasksList[index] = {
      ...tasksList[index],
      statusId,
      statusPosition
    };
    this.tasks$.next(tasksList);
  }
}