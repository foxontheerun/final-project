
import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem, } from '@angular/cdk/drag-drop';
import { findIndex, map, Observable, switchMap } from 'rxjs';
import { TasksDataService } from 'src/app/services/tasks-data.service';
import { taskStatuses } from 'src/app/common/constants';
import { User, Task } from 'src/app/common/interfaces';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {


  public readonly tasksGroupedByStatus$ = this.data.tasks.pipe(
    map(tasks => {
      const result = new Map<number, Task[]>();
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
  );
  public readonly statuses = taskStatuses;

  constructor(private readonly data: TasksDataService) {
  }

  public getSortedTasksFromMap(map: Map<number, Task[]> | null, key: number): Task[] {
    return (
      map?.get(key) ?? []
    ).sort((a, b) => a.statusPosition - b.statusPosition);
  }

  public getConnectedStatuses(statusId: number): string[] {
    return this.statuses.filter(status => status.id !== statusId).map(status => `status-${status.id}`);
  }

  public getSumOfMoneyFromAllTasks(arr:Task[]):number {
        return arr.reduce((sum, elem) => sum + elem.money, 0)
  }

  public drop(event: CdkDragDrop<Task[]>): void {
    const taskId = event.previousContainer.data[event.previousIndex].id;
    const newStatusId = Number(event.container.id.slice(7));
    const newStatusPosition = event.currentIndex;
    this.data.changeTaskByDrop(taskId, newStatusId, newStatusPosition);
  }

}
