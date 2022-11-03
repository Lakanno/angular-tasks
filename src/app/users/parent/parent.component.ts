import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
  currentItem = 'Lakas'
  user = {
    name: 'Laka Nodia',
    age:  29
  }
  constructor() { }

  ngOnInit(): void {
  }

  changeName(name: string){
    this.user = { ...this.user, name: name}
  }
  changeAge(age: number){
    this.user = { ...this.user, age: age}
  }

}
