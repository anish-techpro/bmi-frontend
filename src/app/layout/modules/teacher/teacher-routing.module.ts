import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ExamsComponent } from './exams/exams.component';
import { InboxComponent } from '../../../shared/inbox/inbox.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent
  },
  {
    path: 'exams',
    component: ExamsComponent
  },
  {
    path: 'inbox',
    component: InboxComponent
  },
  {
    path: 'courses',
    loadChildren: './courses/courses.module#CoursesModule'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TeacherRoutingModule { }
