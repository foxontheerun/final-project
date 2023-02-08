import { KanbanBoardService } from './../kanban-board.service';
import { Component, OnInit } from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  public incomingRequests = this.kanbanBoardService.getGroupData(1);
  public inWorkRequests = this.kanbanBoardService.getGroupData(2);
  public toAgreedRequests = this.kanbanBoardService.getGroupData(3);
  public doneRequests = this.kanbanBoardService.getGroupData(4);
  public forShipmentRequests = this.kanbanBoardService.getGroupData(5);

  constructor(public kanbanBoardService: KanbanBoardService) { }

  ngOnInit(): void {
  }

}
