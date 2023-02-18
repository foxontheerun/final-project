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

  public editTask(newTask:Task) {
    const tasksList = this.tasks$.value;
    const index = tasksList.findIndex(task => task.id === newTask.id);
    const previousStatusPosition = tasksList[index].statusPosition;
    const previousStatusId = tasksList[index].statusId;
    const newStatusPosition = 
    previousStatusId !==  newTask.statusId 
      ? tasksList.filter(task => task.statusId === newTask.statusId).length
      : newTask.statusId;
    tasksList
      .filter(task => task.statusId === previousStatusId)
      .filter(task => task.statusPosition >= previousStatusPosition)
      .forEach(task => task.statusPosition -= 1)
    tasksList[index] = {
      ...tasksList[index],
      statusId: newTask.statusId,
      executorId: newTask.executorId,
      priorityId: newTask.priorityId,
      statusPosition: newStatusPosition,
      comment: newTask.comment
    }
    this.tasks$.next(tasksList);
  }
}