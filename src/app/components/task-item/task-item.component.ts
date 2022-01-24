import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import {Task} from './../../Task';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent implements OnInit {
  faTimes = faTimes;

  @Input() task!: Task;
  @Output() onDeleteTask = new EventEmitter();
  @Output() toggleReminderTask: EventEmitter<Task> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }
  //onDelete(task)
  onDelete(task: Task){
    this.onDeleteTask.emit(task);
  }
  //toggleReminder(task)
  onToggle(task: Task){
    this.toggleReminderTask.emit(task);
  }
}
