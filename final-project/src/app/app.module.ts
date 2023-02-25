import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './pages/kanban-board-page/header/header.component';
import { SidebarComponent } from './pages/kanban-board-page/sidebar/sidebar.component';
import { MainComponent } from './pages/kanban-board-page/main/main.component';
import { CardComponent } from './pages/kanban-board-page/main/card/card.component';
import { registerLocaleData } from '@angular/common';
import localeRu from '@angular/common/locales/ru';
import {DragDropModule} from '@angular/cdk/drag-drop';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule} from "@angular/material/card";
import {MatBadgeModule} from "@angular/material/badge";
import {MatButtonModule} from '@angular/material/button';
import {MatListModule} from '@angular/material/list';
import { CreateTaskDialogComponent } from './pages/kanban-board-page/main/create-task-dialog/create-task-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule, MAT_FORM_FIELD_DEFAULT_OPTIONS} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatIconModule} from '@angular/material/icon';
import {MatSidenavModule} from '@angular/material/sidenav';


registerLocaleData(localeRu, 'ru');


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    MainComponent,
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
    MatDialogModule,
    MatSelectModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    ReactiveFormsModule,
    MatSidenavModule
  ],
  providers: [{provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: {appearance: 'outline'}}],
  bootstrap: [AppComponent]
})
export class AppModule { }
