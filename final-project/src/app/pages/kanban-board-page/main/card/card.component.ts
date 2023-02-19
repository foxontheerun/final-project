import { Group } from './../../../../common/interfaces';
import { Component, Input,  SimpleChanges,  OnChanges } from '@angular/core';
import { users } from 'src/app/common/constants';
import { User, Task } from 'src/app/common/interfaces';
import {MatDialog} from '@angular/material/dialog';
import { CreateTaskDialogComponent } from "../create-task-dialog/create-task-dialog.component"


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnChanges {
  @Input() public task: Task | undefined;

  public user: User | undefined;

  constructor(private readonly dialog: MatDialog) {}

  ngOnChanges(changes:SimpleChanges): void {
    if (changes['task']) {
      this.user = users.find(user => user.id === this.task?.executorId);
    }
  }

  public openDialog() {
    const dialogRef = this.dialog.open(CreateTaskDialogComponent, {
      data: { task: this.task },
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
