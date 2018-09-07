import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-class-format-modal',
  templateUrl: './add-class-format-modal.component.html',
  styleUrls: ['./add-class-format-modal.component.css']
})
export class AddClassFormatModalComponent implements OnInit {

  public schedule = [];

  constructor() { }

  ngOnInit() {
    this.schedule = [
      { from: '9.30', to: '10.30', details: 'Lectures' },
      { from: '10.30', to: '10.45', details: 'Coffee break' },
      { from: '10.45', to: '12.30', details: 'Lectures' },
      { from: '12.30', to: '13.30', details: 'Lunch break' }
    ];
  }

  addAnotherSchedule(event) {
    event.preventDefault();
    this.schedule.push({
      from: '',
      to: '',
      details: ''
    });
  }

}
