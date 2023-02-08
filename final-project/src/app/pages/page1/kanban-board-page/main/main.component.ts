import { Component, OnInit } from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  public incomingRequests = ['Ошибка датчика КП-312', 'Тех обслуживание насоса ВР-231', 'Авария на ТП-123'];
  public inWorkRequests = ['Подключение системы ', 'Поверка датчиков на УПН-231'];
  public toAgreedRequests = ['Обновление ПО'];
  public doneRequests = ['Корректировка значений по ВКУ-321'];
  public forShipmentRequests = [];

  constructor() { }

  ngOnInit(): void {
  }

}
