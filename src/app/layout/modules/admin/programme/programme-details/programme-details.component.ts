import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProgrammeService } from '../../services/programme/programme.service';
import { EventService } from '../../../../../services/event/event.service';

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
  public classId = null;
  public currentlySetYear = null;

  constructor(
    private route: ActivatedRoute,
    private programmeService: ProgrammeService,
    public event: EventService
  ) { }

  ngOnInit() {
    this.programmeId = this.route.snapshot.paramMap.get('id');
    this.getClassList();
    this.getModulesList();

    this.event.on('moduleUpdated', (module) => {
      if (this.programme) {
        this.programme.module.forEach(M => {
          if (M.id === module.id) {
            M.name = module.name;
            M.description = module.description;
          }
        })
      }
    });
  }

  private setClassId(class_id) {
    const currentlySetClass = this.classList.find(C => C.id === Number(class_id));
    this.currentlySetYear = (currentlySetClass && currentlySetClass.year) || null;

    this.classId = class_id;
    // used for class format to refresh based on class_id (for now);
    this.event.emit('selectedClassId', class_id);
  }

  getClassList() {
    this.programmeService.getClassList(this.programmeId, (err, res) => {
      if (err) {
        // TODO: implement error handler
      } else {
        this.classList = res.data;
        // FIXME: get the selected class id by calling an API
        this.setClassId(1);
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
    this.setClassId(class_id);
    this.getModulesList(class_id);
  }

  onClassCreated(year) {
    console.log(year);
    this.classList.push(year);
  }

  editModule(module) {
    this.event.emit('editModule', module);
  }

  editCourse(courseId) {
    this.event.emit('editCourse', courseId);
  }

}
