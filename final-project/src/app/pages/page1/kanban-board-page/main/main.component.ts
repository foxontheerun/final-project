
import { Component } from '@angular/core';
import { CdkDragDrop } from '@angular/cdk/drag-drop';
import { map } from 'rxjs';
import { TasksDataService } from 'src/app/services/tasks-data.service';
import { taskStatuses } from 'src/app/common/constants';
import { Task } from 'src/app/common/interfaces';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { CreateTaskDialogComponent } from './create-task-dialog/create-task-dialog.component';

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

  constructor(private readonly data: TasksDataService,
              private readonly dialog: MatDialog) {
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

  public openDialog() {
    const dialogRef = this.dialog.open(CreateTaskDialogComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

}


