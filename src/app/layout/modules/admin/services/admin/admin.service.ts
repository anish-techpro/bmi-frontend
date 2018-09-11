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
        callback(null);
      },
      err => {
        callback(err);
      }
    );
  }

}
