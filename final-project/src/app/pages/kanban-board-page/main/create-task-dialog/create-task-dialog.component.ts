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

  public task:Task = this.data.task;
  
  public taskStatuseName = this.statuses.find(item => item.id === this.task.statusId)?.name;
  
  constructor(@Inject(MAT_DIALOG_DATA) private data: {task: Task},
              private readonly dataService: TasksDataService) { }

  submit():void{
    this.dataService.editTask(this.task);
  }


}
