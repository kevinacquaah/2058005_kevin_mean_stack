import { Component, Input, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { ITask } from '../task';
@Component({
  selector: 'app-show-task',
  templateUrl: './show-task.component.html',
  styleUrls: ['./show-task.component.css']
})
export class ShowTaskComponent implements OnInit {
@Input() taskArray: Array<ITask> =[];
displayedColumns: Array<string> = ["Employee ID", "Name", "Task", "Deadline"];
  constructor() { }

  ngOnInit(): void {
  }
  random() {
    console.log("array size is " + this.taskArray.length);
    for (let task of this.taskArray) {
      console.log("task is " + task.task);
    }
}
}