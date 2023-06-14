import { Component ,Inject} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-edit-todo-dialog',
  templateUrl: './edit-todo-dialog.component.html',
  styleUrls: ['./edit-todo-dialog.component.css']
})
export class EditTodoDialogComponent {

  constructor(private http: HttpClient,
    @Inject("BASE_URL") private baseUrl: string,
    @Inject(MAT_DIALOG_DATA) public data: {id: number, title: string, description: string,
    },
    ){}

  Save(newTodoTitle:string, newDescription: string)
  {
    let editTodo: Todo = {taskID: this.data.id, title: newTodoTitle, description: newDescription}

    this.http.patch<Todo>(this.baseUrl + 'api/Todo/UpdateTodo', editTodo).subscribe(result => {
      console.log(result);
      window.location.reload();
    });
  }
}

interface Todo{
  taskID: number,
  title: string,
  description: string
}
