import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './pages/page1/kanban-board-page/header/header.component';
import { SidebarComponent } from './pages/page1/kanban-board-page/sidebar/sidebar.component';
import { MainComponent } from './pages/page1/kanban-board-page/main/main.component';
import { KanbanBoardPageComponent } from './pages/page1/kanban-board-page/kanban-board-page.component';
import { CardComponent } from './pages/page1/kanban-board-page/main/card/card.component';
import {MatButtonModule} from '@angular/material/button';
import {DragDropModule} from '@angular/cdk/drag-drop';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    MainComponent,
    KanbanBoardPageComponent,
    CardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DragDropModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
