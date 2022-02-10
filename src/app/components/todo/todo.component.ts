import { Component, OnInit } from '@angular/core';

import { Todo } from 'src/app/interfaces/todo';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {

  todos:Array<Todo> = [];
  inputTodo:string = "";

  constructor() { }

  ngOnInit(): void {
    this.todos = [
      { content: "First task sadsdasd asdasdas ", completed: true },
      { content: "Second task", completed: false }
    ]
  }

  toggleDone(id: number) {
    this.todos.map((value, i) => {
      if (i == id) value.completed = !value.completed;
      return value;
    })
  }

  deleteTodo(id:number) {
    this.todos = this.todos.filter((value, i) => i !== id)
  }

  addTodo() {
    this.todos.push({
      content: this.inputTodo,
      completed: false
    });

    this.inputTodo = "";
  }
}
