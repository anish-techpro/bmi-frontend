import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FullCalendarModule } from 'ng-fullcalendar';

import { SharedModule } from '../../../shared/shared.module';

import { AdminRoutingModule } from './admin-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PeerEvaluationComponent } from './peer-evaluation/peer-evaluation.component';
import { PeerEvaluationListComponent } from './peer-evaluation-list/peer-evaluation-list.component';
import { NewsComponent } from './news/news.component';
import { CalendarComponent } from './calendar/calendar.component';
import { CreateAnnouncmentModalComponent } from './dashboard/create-announcment-modal/create-announcment-modal.component';
import { CreateNewsModalComponent } from './news/create-news-modal/create-news-modal.component';
import { AdminService } from './services/admin/admin.service';
import { ProgrammeService } from './services/programme/programme.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    AdminRoutingModule,
    FullCalendarModule,
    SharedModule
  ],
  declarations: [
    DashboardComponent,
    PeerEvaluationComponent,
    PeerEvaluationListComponent,
    NewsComponent,
    CalendarComponent,
    CreateAnnouncmentModalComponent,
    CreateNewsModalComponent,
  ],
  providers: [
    AdminService,
    // ProgrammeService
  ]
})
export class AdminModule { }
