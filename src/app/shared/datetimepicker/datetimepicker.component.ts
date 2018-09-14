import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-datetimepicker',
  template: '<angular2-date-picker [(ngModel)]="date" (onDateSelect)="onDateSelect($event)" [settings]="settings"></angular2-date-picker>'
})
export class DatetimepickerComponent implements OnInit {

  @Input() date = new Date();
  @Input() onlyDate = false;
  @Output() dateChange = new EventEmitter();

  public settings = {}

  constructor() { }

  ngOnInit() {
    this.settings = {
      // bigBanner: true,
      timePicker: !this.onlyDate,
      format: this.onlyDate ? 'yyyy-MM-dd' : 'yyyy-MM-dd hh:mm a',
      closeOnSelect: true
    }
  }

  onDateSelect(event) {
    this.dateChange.emit(event);
  }

}
