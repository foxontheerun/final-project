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
      "date": "21/01/2022",
      "dateChange": "2/02/2023",
      "executor": "Иван Васильев"
    },
     {
      "id": 2,
      "groupId": 1,
      "name":"sdfsdfsdfsd",
      "email": "@sdsdf",
      "money": 2500,
      "date": "21/01/2022",
      "dateChange": "2/02/2023",
      "executor": "Иван Васильев"
    },
    {
      "id": 3,
      "groupId": 5,
      "name":"dsfsdf",
      "email": "@sdsdf",
      "money": 2500,
      "date": "21/01/2022",
      "dateChange": "2/02/2023",
      "executor": "Иван Васильев"
    },
    {
      "id": 4,
      "groupId": 4,
      "name":"gftrtrrrrrrrrrrrrrrrr",
      "email": "@sdsdf",
      "money": 2500,
      "date": "21/01/2022",
      "dateChange": "2/02/2023",
      "executor": "Иван Васильев"
    },
    {
      "id": 5,
      "groupId": 5,
      "name":"ewrwe",
      "email": "@sdsdf",
      "money": 2500,
      "date": "21/01/2022",
      "dateChange": "2/02/2023",
      "executor": "Иван Васильев"
    },
    {
      "id": 5,
      "groupId": 2,
      "name":"ewdewdwefgefvdvdv",
      "email": "@sdsdf",
      "money": 2500,
      "date": "21/01/2022",
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
    {
      "id": 5,
      "groupId": 4,
      "name":"ewrwe",
      "email": "@sdsdf",
      "money": 2500,
      "date": "21/01/2022",
      "dateChange": "2/02/2023",
      "executor": "Иван Васильев"
    },
    {
      "id": 5,
      "groupId": 5,
      "name":"ewrwe",
      "email": "@sdsdf",
      "money": 2500,
      "date": "21/01/2022",
      "dateChange": "2/02/2023",
      "executor": "Иван Васильев"
    }
  ];

  constructor() { 
    // localStorage.setItem('cardsData', JSON.stringify(this.cardsData))
  }

 
}
