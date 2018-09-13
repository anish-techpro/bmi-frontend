import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { EventService } from '../../../../../../../services/event/event.service';
import { AdminService } from '../../../../services/admin/admin.service';

@Component({
  selector: 'app-edit-course-modal',
  templateUrl: './edit-course-modal.component.html',
  styleUrls: ['./edit-course-modal.component.css']
})
export class EditCourseModalComponent implements OnInit {

  @ViewChild('courseBtn') public courseBtn: ElementRef;

  public date: Date = new Date();

  public courseId = null;

  public course = null;
  public teacherList = [];

  public page = 1;
  public currentPage = 0;
  public totalPages = 0;

  constructor(
    private event: EventService,
    private adminService: AdminService
  ) { }

  ngOnInit() {
    this.event.on('editCourse', courseId => {
      if (this.courseBtn) {
        this.courseBtn.nativeElement.click();
      }
      this.courseId = courseId;
      this.reset();
      this.getCourseDetails();
    });
  }

  reset() {
    this.course = null;
    this.teacherList = [];
    this.totalPages = 0;
    this.currentPage = 0;
    this.page = 1;
  }

  getCourseDetails() {
    this.adminService.getCourseDetailsForEditing(this.courseId, (err, res) => {
      this.teacherList = res.teacherListData.data;
      this.totalPages = res.teacherListData.data.last_page;
      this.currentPage = res.teacherListData.data.current_page;
      this.page = 2;
      this.course = res.courseData;
      // console.log(this.course);
    });
  }

}
