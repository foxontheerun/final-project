import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-kanban-board-page',
  templateUrl: './kanban-board-page.component.html',
  styleUrls: ['./kanban-board-page.component.scss']
})
export class KanbanBoardPageComponent implements OnInit {
  showFiller = false;
  constructor() { }

  ngOnInit(): void {
  }

}