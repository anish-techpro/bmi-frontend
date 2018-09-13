import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { SharedService } from '../../../../services/shared/shared.service';
import { EventService } from '../../../../../../../services/event/event.service';
import { AdminService } from '../../../../services/admin/admin.service';

@Component({
  selector: 'app-add-participant-modal',
  templateUrl: './add-participant-modal.component.html',
  styleUrls: ['./add-participant-modal.component.css']
})
export class AddParticipantModalComponent implements OnInit {

  @ViewChild('closeBtn') public closeBtn: ElementRef;

  public participants = [];

  // TODO: add substitute in template if courseId is null
  public courseId = null;
  public page = 1;
  public totalPages = 0;
  public currentPage = 0;

  constructor(
    private adminService: AdminService,
    private event: EventService
  ) { }

  ngOnInit() {
    // TODO: add loader (for every api call in other components as well)
    this.event.on('selectedCourseId', courseId => {
      console.log(courseId);
      this.courseId = courseId;
      this.reset();
      this.getParticipants();
    });
  }

  private reset() {
    this.page = 1;
    this.totalPages = 0;
    this.currentPage = 0;
  }

  getParticipants(page = 1) {
    if (page === this.currentPage) {
      return;
    }
    this.adminService.getCourseParticipants(this.courseId, page, (err, res) => {
      if (err) {
        // TODO: add error handler
      } else {
        this.participants = res.data.map(data => {
          data.image = '../assets/img/profile-image.jpg';
          return data;
        });
        this.currentPage = res.current_page;
        this.totalPages = res.last_page;
      }
    });
  }

  selectAll() {
    this.participants.forEach(participant => participant.selected = true);
  }

  deselectAll() {
    this.participants.forEach(participant => participant.selected = false);
  }

  save() {
    // TODO: implement saving feature
    const selectedIds = this.participants.reduce((result, participant) => {
      if (participant.selected) {
        result.push(participant.id);
      }
      return result;
    }, []);
    const payload = {
      user_id: selectedIds,
      course_id: this.courseId
    };
    this.adminService.addCourseParticipants(payload, (err, res) => {
      if (err) {
        // TODO: implement error handler
      } else {
        this.closeBtn.nativeElement.click();
      }
    });
  }

  generatePageNumbers() {
    let arr = [];
    for (let i = 1; i <= this.totalPages; i++) { arr.push(i); }
    return arr;
  }

}
