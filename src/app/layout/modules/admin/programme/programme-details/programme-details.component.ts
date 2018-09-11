import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProgrammeService } from '../../services/programme/programme.service';

@Component({
  selector: 'app-programme-details',
  templateUrl: './programme-details.component.html',
  styleUrls: ['./programme-details.component.css'],
  providers: [ProgrammeService]
})
export class ProgrammeDetailsComponent implements OnInit {

  public programmeId;

  public programme = null;
  public classList = [];

  constructor(
    private route: ActivatedRoute,
    private programmeService: ProgrammeService
  ) { }

  ngOnInit() {
    this.programmeId = this.route.snapshot.paramMap.get('id');
    this.getClassList();
    this.getModulesList();
  }

  getClassList() {
    this.programmeService.getClassList(this.programmeId, (err, res) => {
      if (err) {
        // TODO: implement error handler
      } else {
        this.classList = res.data;
      }
    });
  }

  getModulesList(classId = null) {
    const payload = {
      programme_id: this.programmeId,
      class_id: classId
    };
    this.programmeService.getModulesList(payload, (err, res) => {
      if (err) {
        // TODO: implement error handler
      } else {
        this.programme = res.data[0];
      }
    });
  }

  onClassSelect(class_id) {
    this.getModulesList(class_id);
  }

}
