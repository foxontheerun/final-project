
import { Component, OnInit,} from '@angular/core';
import { CdkDragDrop } from '@angular/cdk/drag-drop';
import { map, switchMap } from 'rxjs';
import { TasksDataService } from 'src/app/services/tasks-data.service';
import { taskStatuses } from 'src/app/common/constants';
import { Task } from 'src/app/common/interfaces';
import { MatDialog } from '@angular/material/dialog';
import { CreateTaskDialogComponent } from './create-task-dialog/create-task-dialog.component';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit{
  public groupId = 1;
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
              private readonly dialog: MatDialog,
              private readonly route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.route.paramMap.pipe(
      switchMap(params => params.getAll('id'))
    )
    .subscribe(data => this.groupId = +data)
  }

  public getSortedTasksFromMap(map: Map<number, Task[]> | null, key: number): Task[] {
    return (
      map?.get(key) ?? []
    ).sort((a, b) => a.statusPosition - b.statusPosition)
    .filter(task => task.workingGroupId === this.groupId);
  }

  public getConnectedStatuses(statusId: number): string[] {
    return this.statuses.filter(status => status.id !== statusId).map(status => `status-${status.id}`);
  }

  public getSumOfMoneyFromAllTasks(arr:Task[]):number {
    return arr.reduce((sum, elem) => sum + elem.money, 0);
  }

  public drop(event: CdkDragDrop<Task[]>): void {
    const taskId = event.previousContainer.data[event.previousIndex].id;
    const newStatusId = Number(event.container.id.slice(7));
    const newStatusPosition = event.currentIndex;

    this.data.changeTaskByDrop(taskId, newStatusId, newStatusPosition);
  }

  public openDialog(statusId:number = 0) {
    const newTask = this.data.createNewTask(this.groupId, statusId);
    const dialogRef = this.dialog.open(CreateTaskDialogComponent, {
      data: { task: newTask },
    });
    dialogRef.afterClosed().subscribe(result => {
      // console.log(`Dialog result: ${result}`);
    });
  }

  // onMouseEnter(id:string) {
  //   id.style.color = "green";
  //   this.buttonText = "Быстрая сделка";
  // }


  onMouseEnter(hoverName: HTMLElement) {
    hoverName.innerHTML = `<span #thenBlock class="material-symbols-outlined">
          add
    </span>Быстрая сделка`;
  }
  onMouseLeave(hoverName: HTMLElement) {
    hoverName.innerHTML = `<span #thenBlock class="material-symbols-outlined">add</span>`;
  }

}


