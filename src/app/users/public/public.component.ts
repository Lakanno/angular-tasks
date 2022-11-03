import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-public',
  templateUrl: './public.component.html',
  styleUrls: ['./public.component.css']
})
export class PublicComponent implements OnInit {
  date = new Date();
  isValid: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

  onSwitchValid(){
    this.isValid = !this.isValid;
  }
}
