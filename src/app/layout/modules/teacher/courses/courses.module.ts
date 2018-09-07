import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgSelectizeModule } from 'ng-selectize';
import { FullCalendarModule } from 'ng-fullcalendar';

import { CoursesRoutingModule } from './courses-routing.module';
import { AllCoursesComponent } from './all-courses/all-courses.component';
import { CreateCourseComponent } from './create-course/create-course.component';
import { SharedModule } from '../../../../shared/shared.module';
import { AttendanceComponent } from './attendance/attendance.component';
import { GiveAttendanceComponent } from './attendance/give-attendance/give-attendance.component';
import { CreateDiscussionComponent } from './create-discussion/create-discussion.component';
import { DiscussionBoardComponent } from './discussion-board/discussion-board.component';
import { StudentsComponent } from './students/students.component';
import { CalendarComponent } from './calendar/calendar.component';
import { ContentBuildingComponent } from './content-building/content-building.component';

@NgModule({
  imports: [
    CommonModule,
    CoursesRoutingModule,
    SharedModule,
    NgSelectizeModule,
    FullCalendarModule
  ],
  declarations: [AllCoursesComponent, CreateCourseComponent, AttendanceComponent, CreateDiscussionComponent, DiscussionBoardComponent, StudentsComponent, CalendarComponent, GiveAttendanceComponent, ContentBuildingComponent]
})
export class CoursesModule { }
