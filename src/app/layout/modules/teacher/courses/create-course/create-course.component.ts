import { Component, OnInit } from '@angular/core';
import { NgSelectOption } from '@angular/forms';

@Component({
  selector: 'app-create-course',
  templateUrl: './create-course.component.html',
  styleUrls: ['./create-course.component.css']
})
export class CreateCourseComponent implements OnInit {

  public currentStep = 1;
  public selectizeConfig = null;

  constructor() {
    this.selectizeConfig = {
      delimiter: ',',
      persist: true,
      create: function (input) {
        return {
          value: input,
          text: input,
        };
      },
    };
  }

  ngOnInit() {
  }

}
