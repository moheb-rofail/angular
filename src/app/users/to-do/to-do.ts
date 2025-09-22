import { Component } from '@angular/core';

@Component({
  selector: 'app-to-do',
  imports: [],
  templateUrl: './to-do.html',
  styleUrl: './to-do.css'
})
export class ToDo {
  tasks: string[] = [];

  addTask(task: string) {
    //console.log(task);
    this.tasks.push(task);
  }

  deleteTask(index: number) {

      this.tasks.splice(index, 1);
  }

}
