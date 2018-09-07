import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  template: `
    <footer class="an-footer">
      <p>COPYRIGHT 2017 ©. ALL RIGHTS RESERVED</p>
    </footer> <!-- end an-footer -->
  `
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
