import { NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodosComponent } from './todos/todos.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card';
import {MatButton, MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import {CreateNewTodoDialogComponent} from './create-new-todo-dialog/create-new-todo-dialog.component'
import { ReactiveFormsModule ,FormsModule, NgForm} from '@angular/forms';
import { NgFor } from '@angular/common';
import { EditTodoDialogComponent } from './edit-todo-dialog/edit-todo-dialog.component';
import {MatIconModule} from '@angular/material/icon';

export function getBaseUrl(){
  return document.getElementsByTagName('base')[0].href;
}

@NgModule({
  declarations: [
    AppComponent,
    CreateNewTodoDialogComponent,
    TodosComponent,
    DashboardComponent,
    EditTodoDialogComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    MatDialogModule,
    ReactiveFormsModule,
    FormsModule,
    MatIconModule
  ],
  providers: [{provide: 'BASE_URL', useFactory: getBaseUrl, deps:[]}],
  bootstrap: [AppComponent],
  exports: [
    NgForm
  ]
})
export class AppModule { }
