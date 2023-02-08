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
      "name":"Ошибка датчика КП-312",
      "email": "@sdsdf",
      "money": 2500,
      "date": "21/01/2022",
      "dateChange": "2/02/2023",
      "executor": "Иван Васильев"
    }
  ];

  constructor() { 
    localStorage.setItem('cardsData', JSON.stringify(this.cardsData))
  }

  public saveData(key: string, value: string) {
    localStorage.setItem(key, value);
  }

  public getData(key: string) {
    return localStorage.getItem(key)
  }

  public removeData(key: string) {
    localStorage.removeItem(key);
  }

  public clearData() {
    localStorage.clear();
  }
}
