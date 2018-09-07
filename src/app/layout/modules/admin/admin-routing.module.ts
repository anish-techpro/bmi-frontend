import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PeerEvaluationComponent } from './peer-evaluation/peer-evaluation.component';
import { PeerEvaluationListComponent } from './peer-evaluation-list/peer-evaluation-list.component';
import { NewsComponent } from './news/news.component';
import { CalendarComponent } from './calendar/calendar.component';
import { InboxComponent } from '../../../shared/inbox/inbox.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent
  },
  {
    path: 'programme',
    loadChildren: './programme/programme.module#ProgrammeModule'
  },
  {
    path: 'peer-evaluation',
    component: PeerEvaluationListComponent
  },
  {
    path: 'peer-evaluation/:groupId',
    component: PeerEvaluationComponent
  },
  {
    path: 'news',
    component: NewsComponent
  },
  {
    path: 'calendar',
    component: CalendarComponent
  },
  {
    path: 'inbox',
    component: InboxComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
