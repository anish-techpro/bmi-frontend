import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FullCalendarModule } from 'ng-fullcalendar';

import { TeacherRoutingModule } from './teacher-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ExamsComponent } from './exams/exams.component';
import { SharedModule } from '../../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    TeacherRoutingModule,
    FullCalendarModule,
    SharedModule
  ],
  declarations: [DashboardComponent, ExamsComponent]
})
export class TeacherModule { }
