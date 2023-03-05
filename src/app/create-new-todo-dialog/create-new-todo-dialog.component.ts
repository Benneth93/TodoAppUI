import { Component, Inject, Input} from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import {HttpClient} from '@angular/common/http';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-create-new-todo-dialog',
  templateUrl: './create-new-todo-dialog.component.html',
  styleUrls: ['./create-new-todo-dialog.component.css'],
})
export class CreateNewTodoDialogComponent {

  constructor(private http: HttpClient,
    @Inject("BASE_URL") private baseUrl: string,
    @Inject(MAT_DIALOG_DATA) public data: {title: string, description: string,
    },
    ){}

  createNewTodo(newTodoTitle:string, newDescription:string)
  {
    
    let httpHeaders: Headers = new Headers({
      'accept': '*/*',
      'Content-Type': 'application/json'
      
    });
    
    let newTodo: NewTodoDto = {Title: newTodoTitle, Description: newDescription}
    this.http.post<Todo>(this.baseUrl + 'api/Todo/CreateNewTodo', newTodo ).subscribe(result => {
      console.log(result);
      window.location.reload();
    });
  }
}


interface NewTodoDto{
  Title: string;
  Description: string;
}

interface Todo{
  taskID: number;
  title: string;
  description: string;
}
