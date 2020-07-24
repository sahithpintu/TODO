import { Component, OnInit } from '@angular/core';
import { TodoDataService } from '../service/data/todo-data.service';
import { Router } from '@angular/router';

export class ToDo {
  constructor( public id:number,
               public description:string,
               public done:boolean,
               public targetDate: Date)
  {
   
  }
}


@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})
export class ListTodosComponent implements OnInit {

  todos: ToDo[];
  message:string;
//   todos=[
//     new ToDo(1,'Learn Java',false, new Date()),
//     new ToDo(2,'Learn Angular',false, new Date()),
//     new ToDo(3,'Learn Spring Boot',false, new Date())
// ]

  constructor(private todoservice:TodoDataService,private router:Router) { }

  ngOnInit(): void {
   this.refreshTodos();
  }

  refreshTodos()
  {
    this.todoservice.retriveAllTodos('in28Minutes').subscribe(
      response => {
        this.todos=response;
      }
    )
  }

  deleteTodo(id)
  {
        console.log(`delete todo ${id}`);
        this.todoservice.deleteTodo('in28Minutes',id).subscribe(
          response => {
            console.log(response);
            this.message=`Deleted To Do ${id} Successfully`;
            this.refreshTodos();
          }
        )
  }

  updateTodo(id)
  {
    console.log(`update todo ${id}`);
    this.router.navigate(['todos',id]);
       
  }

  addTodo()
  {
    this.router.navigate(['todos',-1]);
  }

}
