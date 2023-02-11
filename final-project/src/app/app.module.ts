import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './pages/page1/kanban-board-page/header/header.component';
import { SidebarComponent } from './pages/page1/kanban-board-page/sidebar/sidebar.component';
import { MainComponent } from './pages/page1/kanban-board-page/main/main.component';
import { KanbanBoardPageComponent } from './pages/page1/kanban-board-page/kanban-board-page.component';
import { CardComponent } from './pages/page1/kanban-board-page/main/card/card.component';

import {DragDropModule} from '@angular/cdk/drag-drop';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule} from "@angular/material/card";
import {MatBadgeModule} from "@angular/material/badge";
import {MatButtonModule} from '@angular/material/button';
import {MatListModule} from '@angular/material/list';
import { CreateTaskDialogComponent } from './pages/page1/kanban-board-page/main/create-task-dialog/create-task-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    MainComponent,
    KanbanBoardPageComponent,
    CardComponent,
    CreateTaskDialogComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DragDropModule,
    NoopAnimationsModule,
    MatBadgeModule,
    MatCardModule,
    MatButtonModule,
    MatListModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
