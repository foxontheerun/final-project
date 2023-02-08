import { KanbanBoardService } from './../kanban-board.service';
import { Component, OnInit } from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  public incomingRequests = this.kanbanBoardService.cards$;
  // public inWorkRequests = ['Подключение системы ', 'Поверка датчиков на УПН-231'];
  // public toAgreedRequests = ['Обновление ПО'];
  // public doneRequests = ['Корректировка значений по ВКУ-321'];
  // public forShipmentRequests = [];

  constructor(public kanbanBoardService: KanbanBoardService) { }

  ngOnInit(): void {
  }

}
