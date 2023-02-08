import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { LocalService } from './local.service';
import { Card } from './main/card/card-interface';

@Injectable({
  providedIn: 'root'
})
export class KanbanBoardService {
  public cards$ = new BehaviorSubject<Card[]>(this.localService.cardsData);
  
  constructor(private localService: LocalService) { }

  

}
