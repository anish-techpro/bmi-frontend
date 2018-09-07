import { Component, OnInit, HostListener, ViewChild, ElementRef, AfterViewChecked, AfterViewInit, ChangeDetectorRef } from '@angular/core';
import { Router } from '@angular/router';
import { UiService } from '../../services/ui/ui.service';
import { HelperService } from '../../services/helper/helper.service';
import { UserService } from '../../services/user/user.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit, AfterViewInit {

  @ViewChild('myStudiesNav') public myStudiesNav: ElementRef;
  @ViewChild('assignmentNav') public assignmentNav: ElementRef;
  @ViewChild('contactsNav') public contactsNav: ElementRef;
  @ViewChild('coursesNav') public coursesNav: ElementRef;
  @ViewChild('createCourseNav') public createCourseNav: ElementRef;
  @ViewChild('assessmentNav') public assessmentNav: ElementRef;

  @HostListener('window:resize')
  onWindowResize() {
    this.checkWindowSize();
  }

  public baseRoute: string;
  public showNavs = {
    myStudies: false,
    assignment: false,
    contacts: false,
    courses: false,
    createCourse: false,
    assessment: false
  }

  constructor(
    public ui: UiService,
    public user: UserService,
    public helper: HelperService,
    private router: Router,
    private cd: ChangeDetectorRef
  ) { }

  ngOnInit() {
    this.checkWindowSize();
  }

  ngAfterViewInit() {
    setTimeout(() => {
      const checkNavOpenFn = (showNavsKey, element) => {
        const classList = element && element.nativeElement.classList;
        this.showNavs[showNavsKey] = (classList && classList.contains('show-child-nav')) || false;
      }

      const navElems = {
        myStudies: this.myStudiesNav,
        assignment: this.assignmentNav,
        contacts: this.contactsNav,
        courses: this.coursesNav,
        createCourse: this.createCourseNav,
        assessment: this.assessmentNav
      };

      Object.entries(navElems).forEach(item => checkNavOpenFn(item[0], item[1]));
    }, 0);
  }

  private checkWindowSize() {
    this.ui.showSidebar = window.innerWidth >= 991;
  }

}
