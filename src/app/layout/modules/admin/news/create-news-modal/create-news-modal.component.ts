import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-news-modal',
  templateUrl: './create-news-modal.component.html',
  styleUrls: ['./create-news-modal.component.css']
})
export class CreateNewsModalComponent implements OnInit {

  public date = new Date();

  constructor() { }

  ngOnInit() {
  }

}
