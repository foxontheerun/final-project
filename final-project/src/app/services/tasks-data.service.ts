import { Priority, Status, User } from 'src/app/common/interfaces';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Group, Task } from '../common/interfaces';
import { LocalService } from './local.service';

@Injectable({
  providedIn: 'root'
})
export class TasksDataService {
  private readonly tasks$ = new BehaviorSubject<Task[]>(JSON.parse(this.localStore.getData('tasks')  || '[]'));
  private readonly workGroups$ = new BehaviorSubject<Group[]>(JSON.parse(this.localStore.getData('workGroups')  || '[]'));
  public readonly users : User[] = JSON.parse(this.localStore.getData('users')  || '[]');
  public readonly priorities : Priority[] = JSON.parse(this.localStore.getData('taskPriorities')  || '[]');
  public readonly statuses : Status[] = JSON.parse(this.localStore.getData('taskStatuses')  || '[]');

  constructor(private localStore: LocalService) {}
  
  public get tasks(): Observable<Task[]> {
    return this.tasks$.asObservable();
  }

  public get workGroups(): BehaviorSubject<Group[]> {
    return this.workGroups$;
  }

  public createNewTask(groupId: number, statusId: number):Task {
    const taskIdArray = this.tasks$.value.map(task => task.id);
    const newId = Math.max.apply(null, taskIdArray) + 1;
    return {
        id: newId,
        name: '',
        lastUpdateDate: new Date(),
        createDate: new Date(),
        executorId: 0,
        workingGroupId: groupId,
        priorityId: 0,
        statusId,
        statusPosition: 0,
        comment: ''
    }
  }

  public changeTaskByDrop(taskId: number, statusId: number, statusPosition: number): void {
    const tasksList = this.tasks$.value;
    const index = tasksList.findIndex(task => task.id === taskId);
    if ((tasksList[index].statusPosition < statusPosition) && (tasksList[index].statusId === statusId)) {
      tasksList
        .filter(task => task.statusId === statusId)
        .filter(task => task.statusPosition <= statusPosition)
        .forEach(task => task.statusPosition -= 1);
    } else {
      tasksList
        .filter(task => task.statusId === statusId)
        .filter(task => task.statusPosition >= statusPosition)
        .forEach(task => task.statusPosition += 1);
    }
    tasksList[index] = {
      ...tasksList[index],
      statusId,
      statusPosition
    };
    this.tasks$.next(tasksList);
  }

  public editTasksList(newTask:Task) {
    let tasksList = this.tasks$.value;
    const index = this.tasks$.value.findIndex(task => task.id === newTask.id);
      if (index !== -1) {
        tasksList = this.updateTaskList(newTask, tasksList, index); 
      } else {
        tasksList = this.addNewTaskToTaskList(newTask, tasksList);
      }
    this.tasks$.next(tasksList);
    this.localStore.saveData('tasks', JSON.stringify(tasksList));
  }

  private updateTaskList(newTask:Task, tasksList: Task[], index:number):Task[] {
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
      lastUpdateDate: newTask.lastUpdateDate,
      statusId: newTask.statusId,
      executorId: newTask.executorId,
      priorityId: newTask.priorityId,
      statusPosition: newStatusPosition,
      comment: newTask.comment
    }
    return tasksList
  }

  private addNewTaskToTaskList(newTask:Task, tasksList: Task[]):Task[] {
    tasksList
        .filter(task => task.statusId ===  newTask.statusId 
                        && task.workingGroupId === newTask.workingGroupId)
        .forEach(task => task.statusPosition += 1)
    tasksList.push(newTask);
    return tasksList;
  }

  public addNewWorkingGroup() {
    const workingGroupList = this.workGroups$.value;
    const newGroupId = workingGroupList.length + 1;
    workingGroupList.push(
      {
        id: newGroupId
      }
    )
    this.workGroups$.next(workingGroupList);
    this.localStore.saveData('workGroups', JSON.stringify(workingGroupList));
    console.log(workingGroupList)
  }

  public getTasksNumberOfWorkGroup(id:number):number {
    const taskList = this.tasks$.value.filter(task => task.workingGroupId === id);
    return taskList.length;
  }

}