import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { TasksDataService } from 'src/app/services/tasks-data.service';
import { Task } from 'src/app/common/interfaces';

@Injectable({
  providedIn: 'root'
})
export class KanbanViewService {
    public tasksFilterByWorkingGroup$(workingGroupId: number) {
     return this.data.tasks.pipe(
        map(tasks => {
          const result = new Map<number, Task[]>();
          tasks = tasks.filter(task => task.workingGroupId === workingGroupId);  
          tasks.forEach(task => { 
            if (result.has(task.statusId)) {
              result.get(task.statusId)?.push(task);
            }
            else {
              result.set(task.statusId, [task]);
            }
          });
          return result;
        })
      )
    }
    constructor(private readonly data: TasksDataService) {}


}