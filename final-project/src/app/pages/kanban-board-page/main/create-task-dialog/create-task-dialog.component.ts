import { BehaviorSubject, map } from 'rxjs';
import { Component, ElementRef, Inject, ViewChild } from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import {taskStatuses, users, taskPriorities} from "../../../../common/constants";
import { Task } from 'src/app/common/interfaces'; 
import { TasksDataService } from 'src/app/services/tasks-data.service';
import {  Validators } from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import { MyErrorStateMatcher } from './error-matcher';
import { FormControl, FormGroupDirective, NgForm } from "@angular/forms";

@Component({
  selector: 'app-create-task-dialog',
  templateUrl: './create-task-dialog.component.html',
  styleUrls: ['./create-task-dialog.component.scss']
})
export class CreateTaskDialogComponent {
  public nameFormControl = new FormControl('', [Validators.required, Validators.minLength(8)]);  
  public priceFormControl = new FormControl('', [Validators.required, Validators.max(10000000)]);
  public matcher = new MyErrorStateMatcher();

  public readonly statuses = taskStatuses;
  public readonly users = users;
  public readonly priorities = taskPriorities;
  public inputTask = this.data.task;
  public task:Task = Object.assign({}, this.data.task);
  
  constructor(@Inject(MAT_DIALOG_DATA) private data: {task: Task},
              private readonly dataService: TasksDataService) { }


  submit():void{
    this.updateDate();
    this.dataService.editTasksList(this.task);
  }

  private updateDate():void {
    const updateDate = new Date();
    this.task.lastUpdateDate = updateDate;
  }


}
