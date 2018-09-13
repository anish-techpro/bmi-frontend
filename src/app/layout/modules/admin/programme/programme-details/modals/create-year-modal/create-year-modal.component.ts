import { Component, OnInit, Input, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';
import { AdminService } from '../../../../services/admin/admin.service';

import * as moment from 'moment';
import swal from 'sweetalert2';

interface IEmba {
  name: string;
  year: string;
  start_date: Date;
  end_date: Date;
};

@Component({
  selector: 'app-create-year-modal',
  templateUrl: './create-year-modal.component.html',
  styleUrls: ['./create-year-modal.component.css']
})
export class CreateYearModalComponent implements OnInit {

  @ViewChild('closeBtn') public closeBtn: ElementRef;

  @Input() programmeId = null;
  @Output() created = new EventEmitter<any>();

  public emba: IEmba;
  public error = null;

  constructor(
    private adminService: AdminService
  ) {
    this.setEmba();
  }

  ngOnInit() {
  }

  private setEmba() {
    this.emba = {
      name: '',
      year: '',
      start_date: new Date(),
      end_date: new Date()
    }
  }

  reset() {
    this.setEmba();
    this.error = {};
  }

  generateYears(startYear, endYear) {
    let arr = [];
    for (let i = endYear; i >= startYear; i--) {
      arr.push(i);
    }
    return arr;
  }

  createYear() {
    this.error = {};
    if (!this.emba.year) {
      this.error['year'] = `The year field is required.`;
      return;
    }
    if (this.emba.start_date > this.emba.end_date) {
      swal('Error!', 'Start Date should be before End Date.', 'warning');
      return;
    }
    const payload = {
      ...this.emba,
      start_date: moment(this.emba.start_date).format('YYYY-MM-DD'),
      end_date: moment(this.emba.end_date).format('YYYY-MM-DD'),
      programme_id: this.programmeId
    }
    this.adminService.createYear(payload, (err, res) => {
      if (err) {
        this.error = err;
      } else {
        this.setEmba();
        this.created.emit(res.year);
        this.closeBtn.nativeElement.click();
      }
    });
  }

}
