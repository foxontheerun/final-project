import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogConfig } from '@angular/material/dialog';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';


@Component({
  selector: 'app-create-task-dialog',
  templateUrl: './create-task-dialog.component.html',
  styleUrls: ['./create-task-dialog.component.css']
})
export class CreateTaskDialogComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) private data: {taskId: number}) { }
  

  ngOnInit(): void {

  }

}
