import { Component } from '@angular/core';
import { todo } from "./input.model"

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html'
})

export class InputComponent {
  newTodo: string;
  todos: todo[] = [
    {
      task: "Create a todolist🚀",
      completed: false,
    },
  ];

  addTodo = () => {
    this.todos.push({
      task: this.newTodo,
      completed: false
    })
  }
}
