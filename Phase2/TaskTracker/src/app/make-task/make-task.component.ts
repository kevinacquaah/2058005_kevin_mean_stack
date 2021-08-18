import { Component, Input, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms'
import { ITask } from '../task';


@Component({
  selector: 'app-make-task',
  templateUrl: './make-task.component.html',
  styleUrls: ['./make-task.component.css']
})
export class MakeTaskComponent implements OnInit {
@Input() taskArray: Array<ITask> =[]
 
constructor() { }

  ngOnInit(): void {
  }

submitTask(taskRef:NgForm) {
  console.log(taskRef.value.eID + "" + taskRef.value.name + "" + taskRef.value.task + "" + taskRef.value.date);
  let newTask = { eID: taskRef.value.eID, name: taskRef.value.name, task: taskRef.value.task, deadline: taskRef.value.date };
  this.taskArray.push(newTask);
  taskRef.reset();
  console.log(this.taskArray.length);
}



}
