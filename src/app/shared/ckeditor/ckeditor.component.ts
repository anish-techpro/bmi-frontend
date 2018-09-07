import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-ckeditor',
  template: '<ckeditor [config]="CkeditorConfig"[readonly]="false" [(ngModel)]="textInput" debounce="500" (change)="onChange($event)"></ckeditor>'
})
export class CkeditorComponent implements OnInit {

  @Input() textInput = '';
  @Output() textInputChange = new EventEmitter();

  public CkeditorConfig = {
    extraPlugins: 'divarea',
    toolbar: [
      { name: 'basicstyles', items: ['Bold', 'Italic', 'Underline', '-', 'RemoveFormat'] },
      { name: 'paragraph', items: ['NumberedList', 'BulletedList', '-', 'Outdent', 'Indent', '-', 'Blockquote'] },
      { name: 'links', items: ['Link', 'Unlink'] },
      { name: 'styles', items: ['Styles', 'Format'] },
    ]
  };

  constructor() { }

  ngOnInit() {
  }

  onChange(event) {
    this.textInputChange.emit(event);
  }

}
