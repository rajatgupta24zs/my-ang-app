import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  newTodo: string;
  todos: string[] = [];

  addTodo = () => {
    this.todos.push(this.newTodo)
    console.log(this.todos)
  }
}
