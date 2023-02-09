import { KanbanBoardService } from './../kanban-board.service';
import { Component, OnInit } from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import { map, Observable } from 'rxjs';
import { Card } from './card/card-interface';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  // private groups = 
  public columns = ['ВХОДЯЩИЕ', 'В РАБОТЕ', 'НА СОГЛАСОВАНИИ', 'ГОТОВО', 'К ОТГРУЗКЕ'];

  public requestIncoming$:Observable<Card[]> = this.kanbanBoardService.getGroupData(1);
  public requestInProgress$:Observable<Card[]> = this.kanbanBoardService.getGroupData(2);
  public requestsForApproval$:Observable<Card[]> = this.kanbanBoardService.getGroupData(3);
  public requestsDone$:Observable<Card[]> = this.kanbanBoardService.getGroupData(4);
  public requestsShipment$:Observable<Card[]> = this.kanbanBoardService.getGroupData(5);

  constructor(public kanbanBoardService: KanbanBoardService) { }

  ngOnInit(): void {
  }


  public getLengthOfArray(array:Observable<Card[]>) {
    // return array.
  }

}
