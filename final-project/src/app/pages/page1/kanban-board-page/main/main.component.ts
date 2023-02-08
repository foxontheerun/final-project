import { Component, OnInit } from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  incomingRequests = ['Ошибка датчика КП-312', 'Тех обслуживание насоса ВР-231', 'Авария на ТП-123'];
  inWorkRequests = ['Подключение системы ', 'Поверка датчиков на УПН-231'];
  toAgreedRequests = ['Обновление ПО'];
  doneRequests = ['Корректировка значений по ВКУ-321'];
  forShipmentRequests = []

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

}
