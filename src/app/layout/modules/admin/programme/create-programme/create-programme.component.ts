import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { concatMap } from 'rxjs/operator/concatMap';

import * as shortid from 'shortid';
import swal from 'sweetalert2';
import { ProgrammeService } from '../../services/programme/programme.service';
import { EmbedVideoService } from 'ngx-embed-video';

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
  styleUrls: ['./create-programme.component.css'],
  providers: [ProgrammeService]
})
export class CreateProgrammeComponent implements OnInit {

  public programme = {
    name: '',
    description: '',
    startDate: new Date(),
    endDate: new Date(),

    videos: [],
    sanitizedUrls: [],
    coverImage: '../assets/img/blog-banner.jpg',
    coverImageFile: null
  }

  public programmePhotos = [];

  private unique_id = shortid.generate();

  constructor(
    private sanitizer: DomSanitizer,
    private programmeService: ProgrammeService,
    private embedService: EmbedVideoService
  ) { }

  ngOnInit() {
    // this.programme.sanitizedUrls = this.programme.videoUrls.map(url => {
    //   return this.sanitizeUrl(url);
    // });
  }

  private sanitizeUrl(url) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url)
  }

  trackFn(index) {
    return index;
  }

  saveProgramme() {
    const payload = {
      name: this.programme.name,
      programme_description: this.programme.description,
      unique_id: this.unique_id,
    };
    if (this.programme.coverImageFile) {
      payload['cover_img'] =  this.programme.coverImageFile;
    }
    this.programmeService.create(payload, (err, res) => {
      if (err) {
        // TODO: implement error handler
        console.log(err);
      }
    });
  }

  changeCoverImage(event) {
    if (event.target.files && event.target.files[0]) {
      this.programme.coverImageFile = event.target.files[0];
      const reader = new FileReader();
      reader.onload = (event: ProgressEvent) => {
        this.programme.coverImage = (<FileReader>event.target).result;
      }
      reader.readAsDataURL(event.target.files[0]);
    }
  }

  addVideoUrl(elem) {
    const url = this.embedService.embed(elem.value);
    elem.value = '';

    let video = {
      url,
      sanitizedUrl: this.sanitizeUrl(url),
      status: 0
    };

    this.programme.videos.push(video);

    const payload = { link: video.url, unique_id: this.unique_id };
    this.programmeService.uploadAttachment(payload, (err, res) => {
      if (err) {
        this.programme.videos = this.programme.videos.filter(V => V !== video);
      } else {
        video.status = 1;
        video['id'] = res.file.id;
      }
    });
  }

  removeVideoUrl(index) {
    // TODO: implement remove video api
    console.log(this.programme.videos[index]);
    this.programme.videos.splice(index, 1);
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
          this.programmePhotos.push(photo);
          // setTimeout((photo) => {
          //   photo.status = 1;
          // }, 3000, photo);
          this.uploadPhoto(file, photo);
        }
        reader.readAsDataURL(file);
      }
    }
  }

  private uploadPhoto(file, photo) {
    const payload = { img: file, unique_id: this.unique_id };
    this.programmeService.uploadAttachment(payload, (err, res) => {
      if (err) {
        this.programmePhotos = this.programmePhotos.filter(P => P !== photo);
      } else {
        photo.status = 1;
        photo.id = res.file.id;
      }
    });
  }

  removePhoto(index) {
    const photo = this.programmePhotos[index];
    photo.status = 0;
    this.programmeService.removeAttachment(photo.id, (err, res) => {
      if (err) {
        // TODO: implement error handler
      } else {
        this.programmePhotos.splice(index, 1);
      }
    });
  }

}
