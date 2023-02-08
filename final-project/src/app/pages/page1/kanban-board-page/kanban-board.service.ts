import { Injectable } from '@angular/core';
import { Card } from './main/card/card-interface';

@Injectable({
  providedIn: 'root'
})
export class KanbanBoardService {
  private cards:Card[] = [];
  
  reader = new FileReader();
  constructor() { }

}
