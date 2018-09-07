import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-datetimepicker',
  template: '<angular2-date-picker [(ngModel)]="date" (onDateSelect)="onDateSelect($event)" [settings]="settings"></angular2-date-picker>'
})
export class DatetimepickerComponent implements OnInit {

  @Input() date = new Date();
  @Output() dateChange = new EventEmitter();

  public settings = {
    // bigBanner: true,
    timePicker: true,
    format: 'yyyy-MM-dd hh:mm a',
    closeOnSelect: false
  }

  constructor() { }

  ngOnInit() {
  }

  onDateSelect(event) {
    this.dateChange.emit(event);
  }

}
