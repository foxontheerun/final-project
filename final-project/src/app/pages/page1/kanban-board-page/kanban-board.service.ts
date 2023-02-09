import { Injectable } from '@angular/core';
import { BehaviorSubject, filter, map, Observable, shareReplay } from 'rxjs';
import { LocalService } from './local.service';
import { Card, Group } from './main/card/card-interface';

@Injectable({
  providedIn: 'root'
})
export class KanbanBoardService {
  private cards$ = new BehaviorSubject<Card[]>(this.localService.cardsData);
  private groups$ = new BehaviorSubject<Group[]>(this.localService.groupsData);

  constructor(private localService: LocalService) { }

  public getGroupData(groupId:number) {
    return this.cards$.pipe(
      map(cards => cards.filter(card => card.groupId === groupId))
    );
  }

  public getGroups() {
    return this.groups$;
  }

}
