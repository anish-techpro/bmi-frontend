import { Component, OnInit } from '@angular/core';
import { HelperService } from '../../../../../../services/helper/helper.service';

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

  constructor() {
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

  addCourseDocument(event) {
    if (event.target.files && event.target.files[0]) {
      this.course.file = event.target.files[0];
    }
  }

  removeCourseDocument() {
    this.course.file = null;
  }

}
