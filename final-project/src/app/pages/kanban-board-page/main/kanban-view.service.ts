import { Injectable } from '@angular/core';
import { BehaviorSubject, map } from 'rxjs';
import { TasksDataService } from 'src/app/services/tasks-data.service';
import { Task } from 'src/app/common/interfaces';
import { ActivatedRoute } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class KanbanViewService {
  public groupId$:BehaviorSubject<number> = new BehaviorSubject(1);
  
  constructor(private readonly data: TasksDataService,
              private readonly route: ActivatedRoute) {}


}