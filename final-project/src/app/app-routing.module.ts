
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { KanbanBoardPageComponent } from './pages/kanban-board-page/kanban-board-page.component';
import { MainComponent } from './pages/kanban-board-page/main/main.component';

const routes: Routes = [
  { path: "", component: KanbanBoardPageComponent },
  { path: 'working-group/:id', component: MainComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
