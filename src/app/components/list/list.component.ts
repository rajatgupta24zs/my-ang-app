import { Component, Input } from '@angular/core';
import { todo } from '../input/input.model';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})

export class ListComponent {
  @Input() todos: todo[] = [];

  onComplete = (i) => {
    this.todos[i].completed = !this.todos[i].completed;
  }
  
  onDelete = (i) => {
    this.todos.splice(i, 1);
    console.log(this.todos[i])
  }
}
