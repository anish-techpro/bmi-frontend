import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { AdminService } from '../../../../services/admin/admin.service';

@Component({
  selector: 'app-create-year-modal',
  templateUrl: './create-year-modal.component.html',
  styleUrls: ['./create-year-modal.component.css']
})
export class CreateYearModalComponent implements OnInit {

  @ViewChild('closeBtn') public closeBtn: ElementRef;

  @Input() programmeId = null;

  public emba = {
    name: '',
    year: ''
  };

  constructor(
    private adminService: AdminService
  ) { }

  ngOnInit() {
  }

  generateYears(startYear, endYear) {
    let arr = [];
    for (let i = endYear; i >= startYear; i--) {
      arr.push(i);
    }
    return arr;
  }

  createYear() {
    const payload = {
      ...this.emba,
      programme_id: this.programmeId
    }
    this.adminService.createYear(payload, (err, res) => {
      if (err) {
        // TODO: error handler
      } else {
        this.closeBtn.nativeElement.click();
      }
    });
  }

}
