import { Component, Inject} from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent {
  public todos: Todo[] = [];
  
  constructor(private http: HttpClient, @Inject('BASE_URL') private baseUrl: string) {
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
}

interface Todo{
  taskID: number;
  title: string;
  description: string;
}
