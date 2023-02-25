
import { Component, OnInit,} from '@angular/core';
import { CdkDragDrop } from '@angular/cdk/drag-drop';
import { combineLatest, map, Observable, startWith, switchMap, BehaviorSubject } from 'rxjs';
import { TasksDataService } from 'src/app/services/tasks-data.service';
import { taskPriorities, taskStatuses } from 'src/app/common/constants';
import { Task } from 'src/app/common/interfaces';
import { MatDialog } from '@angular/material/dialog';
import { CreateTaskDialogComponent } from './create-task-dialog/create-task-dialog.component';
import { ActivatedRoute } from '@angular/router';
import { FormControl } from '@angular/forms';
import { KanbanViewService } from './kanban-view.service';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit{
  public groupId$:BehaviorSubject<number> = new BehaviorSubject(1);
  public readonly priorities = taskPriorities;
  public readonly statuses = taskStatuses;
  
  public filterByName: FormControl = new FormControl('');
  public filterByPriority:  FormControl = new FormControl('');

  public filterByName$: Observable<string> = this.filterByName.valueChanges.pipe(startWith(''));
  public filterByPriority$: Observable<number> = this.filterByPriority.valueChanges.pipe(startWith(-1));

  public filteredTasks$ = combineLatest(this.data.tasks, this.filterByName$, 
    this.filterByPriority$, this.groupId$).pipe(
    map(([tasks, filterString, filterPriority, groupId]) => {
      tasks = tasks.filter(task => task.workingGroupId === groupId);
      let resulat = filterString === "" 
        ? tasks 
        : tasks
          .filter(task => task.name.toLowerCase().includes(filterString.trim().toLowerCase()))
      return filterPriority === -1 
                ? resulat 
                : resulat.filter(task => task.priorityId === filterPriority);
      }
    )
  );

  public readonly tasksGroupedByStatus$ = this.filteredTasks$.pipe(
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


  constructor(private readonly data: TasksDataService,
              private readonly dialog: MatDialog,
              private readonly route: ActivatedRoute,
              private readonly kanbanViewService: KanbanViewService) {
  }

  ngOnInit(): void {
    this.route.paramMap.pipe(
      switchMap(params => params.getAll('id'))
    )
    .subscribe(data => {
      this.groupId$.next(+data);
      this.kanbanViewService.groupId$.next(+data);
    });
  }

  public getSortedTasksFromMap(map: Map<number, Task[]> | null, key: number): Task[] {
    return (
      map?.get(key) ?? []
    ).sort((a, b) => a.statusPosition - b.statusPosition)
  }

  public getConnectedStatuses(statusId: number): string[] {
    return this.statuses.filter(status => status.id !== statusId).map(status => `status-${status.id}`);
  }

  public getSumOfMoneyFromAllTasks(arr:Task[]):number {
    return arr.reduce((sum, elem) => sum + (elem.money ?? 0), 0);
  }

  public drop(event: CdkDragDrop<Task[]>): void {
    const taskId = event.previousContainer.data[event.previousIndex].id;
    const newStatusId = Number(event.container.id.slice(7));
    const newStatusPosition = event.currentIndex;
    this.data.changeTaskByDrop(taskId, newStatusId, newStatusPosition);
  }

  public openDialog(statusId:number = 0) {
    const newTask = this.data.createNewTask(this.groupId$.value, statusId);
    const dialogRef = this.dialog.open(CreateTaskDialogComponent, {
      data: { task: newTask },
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  public changeButtonStyleToCustom(hoverName: HTMLElement) {
    hoverName.innerHTML = `<span class="material-symbols-outlined" style="margin-right: 8px">
          add
    </span>Быстрая сделка`;
  }

  public changeButtonStyleToDefault(hoverName: HTMLElement) {
    hoverName.innerHTML = `<span class="material-symbols-outlined">add</span>`;
  }

}


