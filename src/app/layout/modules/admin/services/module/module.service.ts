import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable()
export class ModuleService {

  constructor(
    private http: HttpClient,
    private router: Router
  ) { }

  create(payload, callback) {
    // payload
    // {"name":"TEST","description":"123","format":"2","programme_id":"1","class_id":"1"}
    this.http.post('/module', payload).subscribe(
      res => {
        callback(null, res);
      },
      err => {
        callback(err);
      }
    );
  }

}
