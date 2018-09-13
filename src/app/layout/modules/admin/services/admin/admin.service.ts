import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AdminService {

  constructor(
    private http: HttpClient
  ) { }

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

}
