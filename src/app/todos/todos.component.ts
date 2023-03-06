import { Component, Inject} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { MatDialog } from '@angular/material/dialog';
import { CreateNewTodoDialogComponent } from '../create-new-todo-dialog/create-new-todo-dialog.component';
import { EditTodoDialogComponent } from '../edit-todo-dialog/edit-todo-dialog.component';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent {
  public todos: Todo[] = [];
  
  constructor(private http: HttpClient, @Inject('BASE_URL') private baseUrl: string, private matDialog:MatDialog) {
    http.get<Todo[]>(baseUrl + 'api/Todo/GetTasks').subscribe(result => {
      this.todos = result;
    }, error => console.error(error));


  }

  onDelete(id: number){
    this.http.delete<string>(this.baseUrl + 'api/Todo/DeleteTodo?id='+id).subscribe(result => {
        console.log(result);
        window.location.reload();
    }, error => console.error(error));
  }

  openSaveDialog(id:number, title:string, description:string){
    let dialog = this.matDialog.open(EditTodoDialogComponent, 
      {width:'400px', data:{'id':id, 'title':title, 'description':description}});
      dialog.afterClosed().subscribe(result => {
        console.log("closed");
        window.location.reload();
      });
  }

  openCreateDialog(){
    let dialog = this.matDialog.open(CreateNewTodoDialogComponent, {width:'400px'});
    dialog.afterClosed().subscribe(result => {
      console.log("closed");
      window.location.reload;
    });
  }
}

interface Todo{
  taskID: number;
  title: string;
  description: string;
}

