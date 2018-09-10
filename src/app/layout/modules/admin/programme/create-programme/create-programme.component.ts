import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { concatMap } from 'rxjs/operator/concatMap';

import * as shortid from 'shortid';

interface IProgramme {
  name: string;
  startDate: Date;
  endDate: Date;
  description: string;
  videoUrls: string[];

  sanitizedUrls: SafeUrl[];
}

@Component({
  selector: 'app-create-programme',
  templateUrl: './create-programme.component.html',
  styleUrls: ['./create-programme.component.css']
})
export class CreateProgrammeComponent implements OnInit {

  public programme = {
    name: '',
    description: '',
    startDate: new Date(),
    endDate: new Date(),

    videoUrls: [],
    sanitizedUrls: [],
    photos: [],
    coverImage: '../assets/img/blog-banner.jpg'
  }


  constructor(
    private sanitizer: DomSanitizer,
    private http: HttpClient
  ) { }

  ngOnInit() {
    this.programme.sanitizedUrls = this.programme.videoUrls.map(url => {
      return this.sanitizeUrl(url);
    });
  }

  private sanitizeUrl(url) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url)
  }

  trackFn(index) {
    return index;
  }

  changeCoverImage(event) {
    if (event.target.files && event.target.files[0]) {
      const reader = new FileReader();
      reader.onload = (event: ProgressEvent) => {
        this.programme.coverImage = (<FileReader>event.target).result;
      }
      reader.readAsDataURL(event.target.files[0]);
    }
  }

  addVideoUrl(elem) {
    const url = elem.value.replace('watch?v=', 'embed/');
    elem.value = '';
    this.programme.videoUrls.push(url);
    this.programme.sanitizedUrls.push(this.sanitizeUrl(url));
  }

  removeVideoUrl(index) {
    this.programme.videoUrls.splice(index, 1);
    this.programme.sanitizedUrls.splice(index, 1);
  }

  addPhotos(event) {
    if (event.target.files) {
      for (let file of event.target.files) {
        const reader = new FileReader();
        reader.onload = (event: ProgressEvent) => {
          const url = (<FileReader>event.target).result;
          const photo = {
            src: url,
            status: 0
          };
          this.programme.photos.push(photo);
          setTimeout((photo) => {
            photo.status = 1;
          }, 3000, photo);
        }
        reader.readAsDataURL(file);
      }
    }
  }

  removePhoto(index) {
    this.programme.photos.splice(index, 1);
  }

}
