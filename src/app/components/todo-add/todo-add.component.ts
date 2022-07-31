import { ToastrService } from 'ngx-toastr';
import { TodoService } from './../../services/todo.service';
import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  FormControl,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-todo-add',
  templateUrl: './todo-add.component.html',
  styleUrls: ['./todo-add.component.css'],
})
export class TodoAddComponent implements OnInit {
  todoAddForm: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private todoService: TodoService,
    private toastrService:ToastrService,
  ) {}

  ngOnInit(): void {
    this.createTodoAddForm();
  }

  createTodoAddForm() {
    this.todoAddForm = this.formBuilder.group({
      title: ['', Validators.required],
      userId: ['', Validators.required],
      id: ['', Validators.required],
      completed: ['', Validators.required],
    });
  }

  add() {
    if(this.todoAddForm.valid){
      let todoModal = Object.assign({}, this.todoAddForm.value);
      this.todoService.add(todoModal).subscribe(response => {

      this.toastrService.success('Ürün eklendi',"Başarılı")
      },responseError => {
        if(responseError.errors.length > 0) {
          this.toastrService.error(responseError.errors);
        }
      })
    }else {
      this.toastrService.error('Formunuz eksik',"Dikkat")
    }
  }
}
