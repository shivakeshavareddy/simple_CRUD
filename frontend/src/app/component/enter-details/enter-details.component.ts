import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-enter-details',
  templateUrl: './enter-details.component.html',
  styleUrls: ['./enter-details.component.css'],
})
export class EnterDetailsComponent implements OnInit {
  title = 'this is a title';
  @Output() selected = new EventEmitter();

  user = {
    name: 'keshav',
    details: 'gammer',
  };
  constructor() {}
  ngOnInit(): void {
    this.selecteUser();
  }

  selecteUser() {
    this.user = {
      name: '',
      details: '',
    };
  }
}
