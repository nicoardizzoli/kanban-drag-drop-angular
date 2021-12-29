import { Board } from './../../models/board.model';
import { Component, OnInit } from '@angular/core';
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';
import { Column } from 'src/app/models/column.model';
@Component({
  selector: 'app-main-view',
  templateUrl: './main-view.component.html',
  styleUrls: ['./main-view.component.scss'],
})
export class MainViewComponent implements OnInit {
  board: Board = new Board('Probando', [
    new Column('DONE', ['Get up', 'Brush teeth', 'Take a shower', 'Check e-mail', 'Walk dog']),
    new Column('TODO', ['Get to work', 'Pick up groceries', 'Go home', 'Fall asleep']),
    new Column('IDEAS', [])
  ]);

  constructor() {}

  ngOnInit(): void {}



  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
  }
}
