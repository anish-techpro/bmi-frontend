import { Component, OnInit } from '@angular/core';
import swal from 'sweetalert2';
import { ModuleService } from '../../../services/module/module.service';
import { AdminService } from '../../../services/admin/admin.service';
import { UiService } from '../../../../../../services/ui/ui.service';
import { Router } from '@angular/router';

interface Module {
  name: string;
  description: string;
  start_date: Date;
  end_date: Date;
}

@Component({
  selector: 'app-module',
  templateUrl: './module.component.html',
  styleUrls: ['./module.component.css'],
  providers: [ModuleService]
})
export class ModuleComponent implements OnInit {

  public module: Module = {
    name: '',
    description: '',
    start_date: new Date(),
    end_date: new Date()
  }

  constructor(
    private moduleService: ModuleService,
    private adminService: AdminService,
    private ui: UiService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  resetAll() {
    this.module = {
      name: '',
      description: '',
      start_date: new Date(),
      end_date: new Date()
    }
  }

  saveModule() {
    if (!this.module.name) {
      swal('Error!', 'Module name is required', 'warning');
      return;
    }
    if (this.module.start_date > this.module.end_date) {
      swal('Error!', 'Start Date should not be after End Date', 'warning');
      return;
    }
    console.log(this.adminService.programmeId, this.adminService.classId);
    const payload = {
      name: this.module.name,
      description: this.module.description,
      format: 2,
      programme_id: this.adminService.programmeId,
      class_id: this.adminService.classId
    }
    this.moduleService.create(payload, (err, res) => {
      if (err) {
        swal('Error!', err[Object.keys(err)[0]], 'error');
      } else {
        console.log(res);
        this.router.navigate(['../']);
        swal('Success!', 'Module created successfully', 'success');
      }
    })
  }

}
