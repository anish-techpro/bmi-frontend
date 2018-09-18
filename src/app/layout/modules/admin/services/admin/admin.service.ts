import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { bindCallback } from 'rxjs/observable/bindCallback';
import { EventService } from '../../../../../services/event/event.service';

@Injectable()
export class AdminService {

  public programmeId = null;
  public classId = null;

  constructor(
    private http: HttpClient,
    private event: EventService
  ) {
    this.event.on('selectedClassId', classId => this.classId = classId);
  }

  createYear(payload, callback) {
    this.http.post('/programme/classes', payload).subscribe(
      res => {
        callback(null, res);
      },
      err => {
        callback(err);
      }
    );
  }

  getCourseParticipants(courseId, page, callback) {
    this.http.get('/programme-participant/' + courseId + '?page=' + page).subscribe(
      res => {
        callback(null, res);
      },
      err => {
        callback(err);
      }
    );
  }

  addCourseParticipants(payload, callback) {
    this.http.post('/programme-participant', payload).subscribe(
      res => {
        callback(null, res);
      },
      err => {
        callback(err);
      }
    );
  }

  getClassFormat(class_id, callback) {
    this.http.get('/programme-classformat/' + class_id).subscribe(
      res => {
        callback(null, res);
      },
      err => {
        callback(err);
      }
    );
  }

  addClassFormat(payload, callback) {
    this.http.post('/programme-classformat', payload).subscribe(
      res => {
        callback(null, res);
      },
      err => {
        callback(err);
      }
    );
  }

  getStudentList(class_id, callback) {
    this.http.get('/student/classes/' + class_id).subscribe(
      res => {
        callback(null, res);
      },
      err => {
        callback(err);
      }
    );
  }

  updateModule(module, callback) {
    const payload = {
      name: module.name,
      description: module.description
    };
    this.http.patch('/module/' + module.id, payload).subscribe(
      res => {
        callback(null, res);
      },
      err => {
        callback(err);
      }
    );
  }

  getTeacherListForCourse(courseId, callback) {
    this.http.get('/teacher/course/' + courseId).subscribe(
      res => {
        callback(null, res);
      },
      err => {
        callback(err);
      }
    );
  }

  getCourseDetailsForEditing(courseId, callback) {
    Observable.forkJoin(
      this.http.get('/course/' + courseId),
      this.http.get('/teacher/course/' + courseId)
    ).subscribe(
      res => {
        callback(null, {
          courseData: res[0],
          teacherListData: res[1]
        });
      },
      err => {
        callback(err);
      }
    );
  }

  addCourseDocument(file, callback) {
    const formData = new FormData();
    formData.append('file', file);
    let headers = new HttpHeaders().set('no-content-type', 'true');
    this.http.post('/course/files', formData, { headers }).subscribe(
      res => {
        callback(null, res);
      },
      err => {
        callback(err);
      }
    );
  }

  removeCourseDocument(file, callback) {
    this.http.delete('/course/files/' + file.enc_name + '/' + file.extension).subscribe(
      res => {
        callback(null, res);
      },
      err => {
        callback(err)
      }
    );
  }

  sendInvitationLinkToTeacher(email, callback) {
    // TODO: also send course id to notify teacher about the course details
    this.http.patch('/teacher/sent-invitation', { email }).subscribe(
      res => {
        callback(null, res);
      },
      err => {
        callback(err);
      }
    );
  }

  updateCourse(courseId, payload, callback) {
    this.http.patch('/course/' + courseId, payload).subscribe(
      res => {
        callback(null, res);
      },
      err => {
        callback(err);
      }
    );
  }

}
