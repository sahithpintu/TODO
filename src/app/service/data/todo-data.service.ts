import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ToDo } from 'src/app/list-todos/list-todos.component';
import {TODO_JPA_API_URL } from 'src/app/app.constants';

@Injectable({
  providedIn: 'root'
})
export class TodoDataService {

  constructor(private http:HttpClient) { }

  retriveAllTodos(username)
  {
    return this.http.get<ToDo[]>(`${TODO_JPA_API_URL}/users/${username}/todos`)
  }

  deleteTodo(username,id)
  {
    return this.http.delete(`${TODO_JPA_API_URL}/users/${username}/todos/${id}`)
        console.log(`delete todo ${id}`);
  }

  retrieveTodo(username,id)
  {
    return this.http.get<ToDo>(`${TODO_JPA_API_URL}/users/${username}/todos/${id}`)
        console.log(`delete todo ${id}`);
  }

  updateTodo(username,id,todo)
  {
    return this.http.put(`${TODO_JPA_API_URL}/users/${username}/todos/${id}`,todo);
        console.log(`delete todo ${id}`);
  }

  createTodo(username,todo)
  {
    return this.http.post(`${TODO_JPA_API_URL}/users/${username}/todos`,todo);
        console.log(`create todo `);
  }


}
