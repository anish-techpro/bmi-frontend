import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { DiplomaPapersComponent } from './diploma-papers/diploma-papers.component';
import { LibraryComponent } from './library/library.component';
import { CalendarComponent } from './calendar/calendar.component';
import { InboxComponent } from '../../../shared/inbox/inbox.component';
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
import { MobilityProgrammeComponent } from './mobility-programme/mobility-programme.component';
import { CoursesComponent } from './modules/courses/courses.component';
import { NG_VALIDATORS } from '@angular/forms';
import { AssignmentDetailsComponent } from './assignment/assignment-details/assignment-details.component';

const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'inbox', component: InboxComponent },
  { path: 'diploma-papers', component: DiplomaPapersComponent },
  { path: 'library', component: LibraryComponent },
  { path: 'calendar', component: CalendarComponent },
  { path: 'programme', component: ProgrammeComponent },
  { path: 'modules', component: ModulesComponent },
  { path: 'modules/:id/courses', component: CoursesComponent },
  { path: 'grades', component: GradesComponent },
  { path: 'attendance', component: AttendanceComponent },
  { path: 'discussion-board', component: DiscussionBoardComponent },
  { path: 'peer-evaluation', component: PeerEvaluationListComponent },
  { path: 'peer-evaluation/:groupId', component: PeerEvaluationComponent },
  { path: 'course-evaluation', component: CourseEvaluationComponent },

  { path: 'contacts/class', component: ContactsComponent, data: { type: 'class' } },
  // ? need to clarify how "emba" contacts will be shown
  // { path: 'contacts/emba', component: ContactsComponent, data: { type: 'emba' } },
  { path: 'contacts/alumni', component: ContactsComponent, data: { type: 'alumni' } },
  { path: 'contacts/faculty', component: ContactsComponent, data: { type: 'faculty' } },

  { path: 'assignments/home', component: AssignmentComponent, data: { type: 'home' } },
  { path: 'assignments/home/:id', component: AssignmentDetailsComponent },
  { path: 'assignments/group', component: AssignmentComponent, data: { type: 'group' } },
  { path: 'assignments/group/:id', component: AssignmentDetailsComponent },

  { path: 'mobility-programme', component: MobilityProgrammeComponent }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentRoutingModule { }

