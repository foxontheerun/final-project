import { Injectable } from '@angular/core';
import { beginTasks, taskPriorities, taskStatuses, users, workingGroups } from '../common/constants';

@Injectable({
  providedIn: 'root'
})
export class LocalService {

  constructor() {
    !this.getData('tasks')?.length && this.saveData('tasks', JSON.stringify(beginTasks));
    !this.getData('workGroups')?.length && this.saveData('workGroups', JSON.stringify(workingGroups));
    !this.getData('users')?.length && this.saveData('users', JSON.stringify(users));
    !this.getData('taskStatuses')?.length  && this.saveData('taskStatuses', JSON.stringify(taskStatuses));
    !this.getData('taskPriorities')?.length  && this.saveData('taskPriorities', JSON.stringify(taskPriorities));
   }

  public saveData(key: string, value: string) {
    localStorage.setItem(key, value);
  }

  public getData(key: string) {
    return localStorage.getItem(key)
  }
  public removeData(key: string) {
    localStorage.removeItem(key);
  }

  public clearData() {
    localStorage.clear();
  }

}
