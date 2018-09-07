import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-module',
  templateUrl: './create-module.component.html',
  styleUrls: ['./create-module.component.css']
})
export class CreateModuleComponent implements OnInit {

  // * type => [1:'module and course', 2:'module only', 3:'diploma paper']
  public type: number = 1;

  constructor() { }

  ngOnInit() {
  }

}
