import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { EventService } from '../../../../../../../services/event/event.service';
import { AdminService } from '../../../../services/admin/admin.service';

@Component({
  selector: 'app-edit-module-modal',
  templateUrl: './edit-module-modal.component.html',
  styleUrls: ['./edit-module-modal.component.css']
})
export class EditModuleModalComponent implements OnInit {

  @ViewChild('closeBtn') public closeBtn: ElementRef;

  public module = null;
  public error = null;

  constructor(
    private event: EventService,
    private adminService: AdminService
  ) { }

  ngOnInit() {
    this.event.on('editModule', module => {
      this.module = {
        id: module.id,
        name: module.name,
        description: module.description
      };
    });
  }

  saveModule() {
    if (!this.module.name) {
      this.error = 'The module name field is required.';
      return;
    }
    this.adminService.updateModule(this.module, (err, res) => {
      if (err) {
        // TODO: implement error handler
      } else {
        this.event.emit('moduleUpdated', this.module);
        this.closeBtn.nativeElement.click();
      }
    });
  }

}
