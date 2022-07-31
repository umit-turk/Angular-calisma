import { CartService } from './../../services/cart.service';
import { TodoService } from './../../services/todo.service';
import { Todo } from 'src/app/models/todo';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
})
export class TodoComponent implements OnInit {
  dataLoaded = false;
  todos: Todo[] = [];
  filterText="";


  constructor(
    private todoService: TodoService,
    private activatedRoute: ActivatedRoute,
    private toastrService:ToastrService,
    private cartService:CartService,
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      if(params['userId']){
        this.getTodosByCategory(params['userId'])
      }else {
        this.getTodos()
      }
    })

  }

  getTodos() {
    this.todoService.getTodos().subscribe((response) => {
      this.todos = response;
      this.dataLoaded = true;
    });
  }

  getTodosByCategory(userId:number) {
    this.todoService.getTodosByCategory(userId).subscribe((response) => {
      this.todos = response;
      this.dataLoaded = true;
    });
  }

  addToCart(todo:Todo) {
    console.log(todo);
    this.toastrService.success('Sepete eklendi',todo.title);
    this.cartService.addToCart(todo);
  }

}
