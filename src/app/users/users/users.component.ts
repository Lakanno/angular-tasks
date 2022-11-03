import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  @Input() userName: string;
  @Input() user: {name: string, age: number};
  @Output() changeNameEvent = new EventEmitter<string>();
  @Output() changeAgeEvent = new EventEmitter<number>()

  constructor() { }

  ngOnInit(): void {
  }

  

}
