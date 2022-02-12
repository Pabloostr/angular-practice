import { JsonPipe } from '@angular/common';
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
  
  updateTodos(){
    console.log(localStorage);
    let myLocakStorage = {...localStorage}; // зробив з масива значень локал сторедж обєкт (ключ: значення)
    console.log(myLocakStorage);
    let arr = Object.entries(myLocakStorage);
    console.log(arr)
     /* 0: (2) ['test4 ', '{"content":"test4 ","completed":false}']
     1: (2) ['test 5', '{"content":"test 5","completed":false}']
     2: (2) ['test 3', '{"content":"test 3","completed":false}']
     3: (2) ['test2', '{"content":"test2","completed":false}']
      4: (2) ['test1', '{"content":"test1","completed":false}'] */

    let result = arr.map(el => {
      return JSON.parse(el[1]) // беру кожен елемент (масив) перетворю в js обєкт стрічку
    })
    this.todos = result;
  }
 
  constructor() { }

  ngOnInit(): void {
    // this.todos = [
    //   { content: "First task sadsdasd asdasdas ", completed: true },
    //   { content: "Second task", completed: false }
    // ]
    // this.todos = JSON.parse(localStorage['test']);
    // this.showLocal()
    this.updateTodos()
  }

  toggleDone(id: number) {
    this.todos.map((value, i) => {
      if (i == id) value.completed = !value.completed;
      return value;
    })
    
  }

  deleteTodo(id:number) {
    this.todos = this.todos.filter((value, i) => i !== id);
    
  }

  addTodo() {

    this.todos.push({
      content: this.inputTodo,
      completed: false
    });
    localStorage.removeItem(this.inputTodo);
    localStorage.setItem(this.inputTodo, JSON.stringify(this.todos[this.todos.length - 1]));
   

    this.inputTodo = "";
  }
}
