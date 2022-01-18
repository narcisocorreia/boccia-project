import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-task-container',
  templateUrl: './task-container.component.html',
  styleUrls: ['./task-container.component.scss'],
})
export class TaskContainerComponent implements OnInit {
  @Input() list: string[] | undefined;

  constructor() {}

  ngOnInit(): void {}
}
