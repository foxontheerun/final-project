import { Injectable } from '@angular/core';
import { Card } from './main/card/card-interface';

@Injectable({
  providedIn: 'root'
})

export class LocalService {
  public cardsData:Card[] = [
    {
      "id": 1,
      "groupId": 1,
      "name":"Ошибка датчика КП-312",
      "email": "@sdsdf",
      "money": 2500,
      "date": "21 января 2022",
      "dateChange": "2 февраля 2022",
      "executor": "Иван Васильев"
    },
     {
      "id": 2,
      "groupId": 1,
      "name":"Тех обслуживание насоса ВР-231",
      "email": "@sdsdf",
      "money": 500,
      "date": "21 января 2022",
      "dateChange": "2 февраля 2022",
      "executor": "Татьяна Андреева"
    },
    {
      "id": 3,
      "groupId": 2,
      "name":"Подключение системы ",
      "email": "@sdsdf",
      "money": 1700,
      "date": "21 января 2022",
      "dateChange": "2 февраля 2022",
      "executor": "Джон Траволта"
    },
    {
      "id": 4,
      "groupId": 4,
      "name":"Поверка датчиков на УПН-231",
      "email": "@sdsdf",
      "money": 2500,
      "date": "21 января 2022",
      "dateChange": "",
      "executor": "Иван Васильев"
    },
    {
      "id": 5,
      "groupId": 3,
      "name":"Обновление ПО",
      "email": "@sdsdf",
      "money": 2500,
      "date": "21 января 2022",
      "dateChange": "2/02/2023",
      "executor": "Игорь Васильев"
    },
    {
      "id": 5,
      "groupId": 4,
      "name":"Корректировка значений по ВКУ-321",
      "email": "@sdsdf",
      "money": 2500,
      "date": "21 января 2022",
      "dateChange": "2/02/2023",
      "executor": "Иван Васильев"
    },
    {
      "id": 5,
      "groupId": 3,
      "name":"ewrwe",
      "email": "@sdsdf",
      "money": 2500,
      "date": "21/01/2022",
      "dateChange": "2/02/2023",
      "executor": "Иван Васильев"
    },
  ];

  constructor() { 
    // localStorage.setItem('cardsData', JSON.stringify(this.cardsData))
  }

 
}
