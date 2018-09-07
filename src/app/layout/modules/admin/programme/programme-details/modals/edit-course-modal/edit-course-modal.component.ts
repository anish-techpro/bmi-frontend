import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-course-modal',
  templateUrl: './edit-course-modal.component.html',
  styleUrls: ['./edit-course-modal.component.css']
})
export class EditCourseModalComponent implements OnInit {

  public date: Date = new Date();

  constructor() { }

  ngOnInit() {
  }

}
