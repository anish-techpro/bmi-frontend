import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AllCoursesComponent } from './all-courses/all-courses.component';
import { CreateCourseComponent } from './create-course/create-course.component';
import { AttendanceComponent } from './attendance/attendance.component';
import { CreateDiscussionComponent } from './create-discussion/create-discussion.component';
import { DiscussionBoardComponent } from './discussion-board/discussion-board.component';
import { StudentsComponent } from './students/students.component';
import { CalendarComponent } from './calendar/calendar.component';
import { GiveAttendanceComponent } from './attendance/give-attendance/give-attendance.component';
import { ContentBuildingComponent } from './content-building/content-building.component';

const routes: Routes = [
  {
    path: 'all',
    component: AllCoursesComponent
  },
  {
    path: 'create',
    component: CreateCourseComponent
  },
  {
    path: 'build-content',
    component: ContentBuildingComponent
  },
  // {
  //   path: 'webinars',
  //   component: WebinarsComponent
  // },
  {
    path: 'assessment',
    loadChildren: './assessment/assessment.module#AssessmentModule'
  },
  {
    path: 'attendance',
    component: AttendanceComponent
  },
  {
    path: 'attendance/:id',
    component: GiveAttendanceComponent
  },
  {
    path: 'create-discussion',
    component: CreateDiscussionComponent
  },
  {
    path: 'discussion-board',
    component: DiscussionBoardComponent
  },
  {
    path: 'students',
    component: StudentsComponent
  },
  {
    path: 'calendar',
    component: CalendarComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoursesRoutingModule { }
