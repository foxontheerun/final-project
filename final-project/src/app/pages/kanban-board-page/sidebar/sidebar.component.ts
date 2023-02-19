import { Component, OnInit } from '@angular/core';
import { workingGroups } from 'src/app/common/constants';
import { TasksDataService } from 'src/app/services/tasks-data.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  public readonly groups$ = this.data.workGroups;
  
  constructor(private readonly data: TasksDataService) { }

  ngOnInit(): void {
  }

  public addNewGroup():void {
    this.data.addNewWorkingGroup();
  }

  public getTasksNumber(groupId: number) {
    return this.data.getTasksNumberOfWorkGroup(groupId);
  }

}
