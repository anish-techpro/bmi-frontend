import { Component, OnInit, Input } from '@angular/core';
import { AdminService } from '../../../services/admin/admin.service';
import { EventService } from '../../../../../../services/event/event.service';

@Component({
  selector: 'app-programme-student-list',
  templateUrl: './programme-student-list.component.html',
  styleUrls: ['./programme-student-list.component.css']
})
export class ProgrammeStudentListComponent implements OnInit {

  @Input() classId = null;

  public studentList = [];

  public selectAllStudentsCheckbox = false;

  constructor(
    private adminService: AdminService,
    private event: EventService
  ) { }

  ngOnInit() {
    if (this.classId) {
      this.getStudentList();
    }
    this.event.on('selectedClassId', classId => {
      this.classId = classId
      this.getStudentList();
    });
  }

  getStudentList() {
    this.adminService.getStudentList(this.classId, (err, res) => {
      if (!err) {
        // FIXME: response should contain a data key which will contain the data
        this.studentList = res.map(data => data.user);
        // console.log(this.studentList);
      }
    });
  }

  onSelectAllStudentsChange() {
    this.studentList = this.studentList.map(student => {
      student.selected = this.selectAllStudentsCheckbox;
      return student;
    });
  }

}
