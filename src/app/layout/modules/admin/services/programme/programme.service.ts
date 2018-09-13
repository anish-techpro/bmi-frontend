import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import swal from 'sweetalert2';
import { Router } from '@angular/router';

@Injectable()
export class ProgrammeService {

  public selectedClassId = null;

  constructor(
    private http: HttpClient,
    private router: Router
  ) { }

  get(page, callback) {
    this.http.get('/programme?page=' + page).subscribe(
      res => {
        callback(null, res);
      },
      err => {
        callback(err);
      }
    );
  }

  uploadAttachment(payload, callback) {
    // FIXME: upload not reflecting in database
    const formData = new FormData();
    Object.entries(payload).forEach((entry: any) => formData.append(entry[0], entry[1]));
    let headers = new HttpHeaders();
    headers = headers.set('no-content-type', 'true');
    this.http.post('/programme/files', formData, { headers }).subscribe(
      res => {
        callback(null, res)
      },
      err => {
        if (err.img || err.link) {
          swal('Oops!', err.img || err.link, 'warning');
          callback(err);
        }
      }
    )
  }

  removeAttachment(id, callback) {
    this.http.delete('/programme/files/' + id).subscribe(
      res => {
        callback(null, res);
      },
      err => {
        // ? what different types of error can occur
        console.log(err);
        callback(err);
      }
    );
  }

  create(payload, callback) {
    const formData = new FormData();
    Object.entries(payload).forEach((entry: any) => formData.append(entry[0], entry[1]));
    let headers = new HttpHeaders();
    headers = headers.set('no-content-type', 'true');
    this.http.post('/programme', formData, { headers }).subscribe(
      res => {
        swal('Success', 'Programme created successfully', 'success');
        this.router.navigate(['../']);
      },
      (err: any) => {
        swal('Error!', err[Object.keys(err)[0]], 'warning');
      }
    );
  }

  getModulesList({ programme_id, class_id }, callback) {
    this.http.get('/programme/modules/' + programme_id + '/' + (class_id || 1)).subscribe(
      res => {
        callback(null, res);
      },
      err => {
        console.log(err);
      }
    );
  }

  getClassList(programme_id, callback) {
    this.http.get('/programme/classes/' + programme_id).subscribe(
      res => {
        callback(null, res);
      },
      err => {
        console.log(err);
      }
    );
  }
}
