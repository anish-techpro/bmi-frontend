import { Component, OnInit, Input } from '@angular/core';
import { EventService } from '../../../../../../services/event/event.service';
import { AdminService } from '../../../services/admin/admin.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-programme-class-format',
  templateUrl: './programme-class-format.component.html',
  styleUrls: ['./programme-class-format.component.css']
})
export class ProgrammeClassFormatComponent implements OnInit {

  @Input() classId = null;

  public classFormat = null;
  public error = null;

  constructor(
    private adminService: AdminService,
    private event: EventService
  ) { }

  ngOnInit() {
    if (this.classId) {
      this.getClassFormat();
    }
    this.event.on('selectedClassId', classId => {
      this.classId = classId;
      this.getClassFormat()
    });
  }

  getClassFormat() {
    this.adminService.getClassFormat(this.classId, (err, res) => {
      if (err) {
        // TODO:
      } else {
        const defaultFormat = {
          days: '',
          schedule: []
        };
        this.classFormat = res.data || defaultFormat;
        if (typeof this.classFormat.schedule === 'string') {
          this.classFormat.schedule = JSON.parse(this.classFormat.schedule);
        }
        if (this.classFormat.schedule.length === 0) {
          this.addSchedule(true);
        }
      }
    });
  }

  addSchedule(initial = false) {
    if (!initial) {
      const schedule = this.classFormat.schedule[this.classFormat.schedule.length - 1];
      if (!schedule.from || !schedule.to || !schedule.details) {
        this.error = 'You need to fill all the fields.';
        return;
      }
    }
    if (this.classFormat.schedule.length === 1) {
      this.classFormat.schedule[0].initial = false;
    }
    this.classFormat.schedule.push({
      from: '',
      to: '',
      details: '',
      initial
    });
  }

  saveClassFormat() {
    this.error = null;
    const invalidSchedule = this.classFormat.schedule.find(
      schedule => this.invalidSchedule(schedule)
    );
    if (invalidSchedule) {
      this.error = "Some field is empty.";
      return;
    }
    const payload = {
      class_id: this.classId,
      days: this.classFormat.days,
      schedule: JSON.stringify(this.classFormat.schedule)
    };
    this.adminService.addClassFormat(payload, (err, res) => {
      if (err) {
        this.error = err[Object.keys(err)[0]];
      } else {
        swal('Success!', 'Class Format updated successfully', 'success');
      }
    });
  }

  removeSchedule(index) {
    this.error = null;
    this.classFormat.schedule.splice(index, 1);
    if (this.classFormat.schedule.length === 1) {
      this.classFormat.schedule[0].initial = true;
    }
  }

  private invalidSchedule(schedule) {
    return !schedule.from || !schedule.to || !schedule.details;
  }

}
