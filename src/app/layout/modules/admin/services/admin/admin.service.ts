import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

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

}
