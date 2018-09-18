import { Component, OnInit } from '@angular/core';
import { AdminService } from '../../services/admin/admin.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-module',
  templateUrl: './create-module.component.html',
  styleUrls: ['./create-module.component.css']
})
export class CreateModuleComponent implements OnInit {

  // * type => [1:'module and course', 2:'module only', 3:'diploma paper']
  public type: number = 1;

  constructor(
    private adminService: AdminService,
    private router: Router
  ) { }

  ngOnInit() {
    if (!this.adminService.programmeId || !this.adminService.classId) {
      this.router.navigate(['../']);
    }
  }

}
