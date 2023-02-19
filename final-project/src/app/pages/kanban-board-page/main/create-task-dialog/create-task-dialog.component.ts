import { BehaviorSubject, map } from 'rxjs';
import { Component, ElementRef, Inject, ViewChild } from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import {taskStatuses, users, taskPriorities} from "../../../../common/constants";
import { Task } from 'src/app/common/interfaces'; 
import { TasksDataService } from 'src/app/services/tasks-data.service';

@Component({
  selector: 'app-create-task-dialog',
  templateUrl: './create-task-dialog.component.html',
  styleUrls: ['./create-task-dialog.component.scss']
})
export class CreateTaskDialogComponent {
  public readonly statuses = taskStatuses;
  public readonly users = users;
  public readonly priorities = taskPriorities;

  public task:Task = Object.assign({}, this.data.task);
  
  constructor(@Inject(MAT_DIALOG_DATA) private data: {task: Task},
              private readonly dataService: TasksDataService) { }


  submit():void{
    this.updateDate();
    this.dataService.editTask(this.task);
  }

  private updateDate():void {
    const updateDate = new Date();
    this.task.lastUpdateDate = updateDate;
  }


}
