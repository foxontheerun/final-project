import { Component, Input, OnInit, SimpleChanges,  OnChanges } from '@angular/core';
import { users } from 'src/app/common/constants';
import { User, Task } from 'src/app/common/interfaces';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnChanges {
  @Input() public task: Task | undefined;
  public user: User | undefined;

  ngOnChanges(changes:SimpleChanges): void {
    if (changes['task']) {
      this.user = users.find(user => user.id === this.task?.executorId);
    }
  }
}
