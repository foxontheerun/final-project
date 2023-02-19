import { workingGroups } from 'src/app/common/constants';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Group, Task } from '../common/interfaces';
import { beginTasks } from '../common/constants';

@Injectable({
  providedIn: 'root'
})
export class TasksDataService {
  private readonly tasks$ = new BehaviorSubject<Task[]>(beginTasks);
  private readonly workGroups$ = new BehaviorSubject<Group[]>(workingGroups);
  
  public get tasks(): Observable<Task[]> {
    return this.tasks$.asObservable();
  }

 public createNewTask(groupId: number):Task {
  const taskIdArray = this.tasks$.value.map(task => task.id);
  const newId = Math.max.apply(null, taskIdArray) + 1;
  return {
      id: newId,
      name: '',
      money: 0,
      lastUpdateDate: new Date(),
      createDate: new Date(),
      executorId: 0,
      workingGroupId: groupId,
      priorityId: 0,
      statusId: 0,
      statusPosition: 0,
      comment: ''
  }
 }
  public get workGroups(): BehaviorSubject<Group[]> {
    return this.workGroups$;
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

  public editTasksList(newTask:Task) {
    const tasksList = this.tasks$.value;
    const index = tasksList.findIndex(task => task.id === newTask.id);
      if (index !== -1) {
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
    } else {
      tasksList
        .filter(task => task.statusId ===  newTask.statusId 
                        && task.workingGroupId === newTask.workingGroupId)
        .forEach(task => task.statusPosition += 1)
      tasksList.push(newTask);
    }
    this.tasks$.next(tasksList);
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
  }

  public getTasksNumberOfWorkGroup(id:number):number {
    const taskList = this.tasks$.value.filter(task => task.workingGroupId === id);
    return taskList.length;
  }

}