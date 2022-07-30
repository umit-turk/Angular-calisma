import { TodoService } from './../../services/todo.service';
import { Todo } from 'src/app/models/todo';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
})
export class TodoComponent implements OnInit {
  dataLoaded = false;
  todos: Todo[] = [];
  constructor(private todoService: TodoService) {}

  ngOnInit(): void {
    this.getTodos();
  }

  getTodos() {
    this.todoService.getTodos().subscribe((response) => {
      this.todos = response;
    });
  }
}
