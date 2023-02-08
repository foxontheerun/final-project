import { Injectable } from '@angular/core';
import { BehaviorSubject, filter, map, Observable, shareReplay } from 'rxjs';
import { LocalService } from './local.service';
import { Card } from './main/card/card-interface';

@Injectable({
  providedIn: 'root'
})
export class KanbanBoardService {
  private cards$ = new BehaviorSubject<Card[]>(this.localService.cardsData);

  constructor(private localService: LocalService) { }

  public getGroupData(groupId:number) {
    return this.cards$.pipe(
      map(cards => cards.filter(card => card.groupId == groupId))
    );
  }

}
