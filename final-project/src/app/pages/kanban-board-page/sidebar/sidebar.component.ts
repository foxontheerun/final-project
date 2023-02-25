import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TasksDataService } from 'src/app/services/tasks-data.service';
import { KanbanViewService } from '../main/kanban-view.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  public readonly groups$ = this.data.workGroups;
  public readonly groupId$ = this.kanbanViewService.groupId$;
  
  constructor(private readonly data: TasksDataService,
              private readonly kanbanViewService: KanbanViewService) { }

  ngOnInit(): void {
  }

  public addNewGroup():void {
    this.data.addNewWorkingGroup();
  }

  public getTasksNumber(groupId: number) {
    return this.data.getTasksNumberOfWorkGroup(groupId);
  }

}
