import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FullCalendarModule } from 'ng-fullcalendar';

import { StudentRoutingModule } from './student-routing.module';
import { SharedModule } from '../../../shared/shared.module';

import { DashboardComponent } from './dashboard/dashboard.component';
import { DiplomaPapersComponent } from './diploma-papers/diploma-papers.component';
import { LibraryComponent } from './library/library.component';
import { CalendarComponent } from './calendar/calendar.component';
import { ProgrammeComponent } from './programme/programme.component';
import { ModulesComponent } from './modules/modules.component';
import { GradesComponent } from './grades/grades.component';
import { AttendanceComponent } from './attendance/attendance.component';
import { DiscussionBoardComponent } from './discussion-board/discussion-board.component';
import { PeerEvaluationListComponent } from './peer-evaluation-list/peer-evaluation-list.component';
import { PeerEvaluationComponent } from './peer-evaluation/peer-evaluation.component';
import { CourseEvaluationComponent } from './course-evaluation/course-evaluation.component';
import { ContactsComponent } from './contacts/contacts.component';
import { AssignmentComponent } from './assignment/assignment.component';
import { AssignmentDetailsComponent } from './assignment/assignment-details/assignment-details.component';
import { MobilityProgrammeComponent } from './mobility-programme/mobility-programme.component';
import { CoursesComponent } from './modules/courses/courses.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    FullCalendarModule,
    StudentRoutingModule,
    SharedModule
  ],
  declarations: [
    DashboardComponent,
    DiplomaPapersComponent,
    LibraryComponent,
    CalendarComponent,
    ProgrammeComponent,
    ModulesComponent,
    GradesComponent,
    AttendanceComponent,
    DiscussionBoardComponent,
    PeerEvaluationListComponent,
    PeerEvaluationComponent,
    CourseEvaluationComponent,
    ContactsComponent,
    AssignmentComponent,
    MobilityProgrammeComponent,
    CoursesComponent,
    AssignmentDetailsComponent
  ]
})
export class StudentModule { }
