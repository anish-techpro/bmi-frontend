import { Component, OnInit } from '@angular/core';
import { HelperService } from '../../../../../../services/helper/helper.service';
import { UiService } from '../../../../../../services/ui/ui.service';
import swal from 'sweetalert2';
import { AdminService } from '../../../services/admin/admin.service';

interface Exam {
  name: string;
  start_date: Date;
  end_date: Date;
}

interface Project {
  name: string;
  start_date: Date;
  end_date: Date;
}

interface Course {
  name: string;
  description: string;
  start_date: Date;
  end_date: Date;
  // teachers: [],
  exam: Exam;
  project: Project;
  file: any;

  added?: boolean;
}

class Module {
  name: string;
  description: string;
  courses: Course[];
}

@Component({
  selector: 'app-module-and-course',
  templateUrl: './module-and-course.component.html',
  styleUrls: ['./module-and-course.component.css']
})
export class ModuleAndCourseComponent implements OnInit {

  public ui = {
    // has module name being entered (is module name field not empty)
    moduleNameEntered: false,

    showCourseForm: false,

  }

  public module: Module;
  public course: Course;

  public uploadedFiles = [];

  public teacherList = [];
  public page = 1;
  public currentPage = 0;
  public totalPages = 0;

  constructor(
    private uiService: UiService,
    private adminService: AdminService
  ) {
    this.module = this.generateModule();
  }

  ngOnInit() {
  }

  private generateModule(): Module {
    return {
      name: '',
      description: '',
      courses: []
    }
  }

  private generateCourse(): Course {
    return {
      name: '',
      description: '',
      start_date: new Date(),
      end_date: new Date(),
      exam: {
        name: '',
        start_date: new Date(),
        end_date: new Date()
      },
      project: {
        name: '',
        start_date: new Date(),
        end_date: new Date()
      },
      file: null
    }
  }

  createNewCourse() {
    this.course = this.course || this.generateCourse();
  }

  editCourse(index) {
    if (this.module.courses[index]) {
      this.course = JSON.parse(JSON.stringify(this.module.courses[index]));
      this.course['index'] = index;
    }
  }

  hideCourseForm() {
    this.course = null;
  }

  resetCourseForm() {
    this.course = this.generateCourse();
  }

  addCourseToModule() {
    this.course['added'] = true;
    this.module.courses.push(this.course);
    this.course = null;
  }

  updateCourse() {
    this.module.courses[this.course['index']] = this.course;
    this.course = null;
  }

  saveModule() {
    // TODO: implement functionality
    console.log(this.module);
  }

  onModuleNameKeyup(event) {
    if (event.target.value) {
      this.ui.moduleNameEntered = true;
    } else {
      this.ui.moduleNameEntered = false;
    }
  }

  removeCourseDocument() {
    this.course.file = null;
  }

  addCourseDocument(event) {
    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];
      event.target.value = '';
      this.uiService.loader.show();
      this.adminService.addCourseDocument(file, (err, res) => {
        this.uiService.loader.hide();
        if (err) {
          swal('Error!', err.file, 'warning');
        } else {
          this.uploadedFiles.push(res.file);
        }
      });
    }
  }


  getTeacherList() {
    this.adminService.getTeacherListForCourse(0, (err, res) => {
      if (err) {
        swal('Error!', err[Object.keys(err)[0]], 'error');
      } else {
        this.teacherList = res.data;
        this.totalPages = res.data.last_page;
        this.currentPage = res.data.current_page;
        this.page = 2;
      }
    });
  }

  selectAllTeachers() {
    this.teacherList.forEach(teacher => teacher.selected = true);

  }

  deselectAllTeachers() {
    this.teacherList.forEach(teacher => teacher.selected = false);
  }

  public selectedTeachers = [];
  assignTeacher() {
    this.selectedTeachers = this.teacherList.reduce((result, teacher) => {
      if (teacher.selected) {
        result.push(teacher.id);
      }
      return result;
    }, []);
  }

  // removeCourseDocument(index) {
  //     this.ui.loader.show();
  //     this.adminService.removeCourseDocument(this.uploadedFiles[index], (err, res) => {
  //         this.ui.loader.hide();
  //         if (err) {
  //             // TODO: implement error handler
  //         } else {
  //             this.uploadedFiles.splice(index, 1);
  //         }
  //     });
  // }

}
