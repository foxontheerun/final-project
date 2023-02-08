import { KanbanBoardService } from './../kanban-board.service';
import { Component, OnInit } from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  public columns = ['ВХОДЯЩИЕ', 'В РАБОТЕ', 'НА СОГЛАСОВАНИИ', 'ГОТОВО', 'К ОТГРУЗКЕ'];
  
  public getTasksByGroup(id:number) {
    return this.kanbanBoardService.getGroupData(id);
  }
  constructor(public kanbanBoardService: KanbanBoardService) { }

  ngOnInit(): void {
  }

}
