import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AssessmentRoutingModule } from './assessment-routing.module';
import { ClosedBookComponent } from './closed-book/closed-book.component';
import { OpenBookComponent } from './open-book/open-book.component';
import { InClassComponent } from './in-class/in-class.component';
import { TakeHomeComponent } from './take-home/take-home.component';
import { PeerEvaluationListComponent } from './peer-evaluation/peer-evaluation-list/peer-evaluation-list.component';

@NgModule({
  imports: [
    CommonModule,
    AssessmentRoutingModule
  ],
  declarations: [ClosedBookComponent, OpenBookComponent, InClassComponent, TakeHomeComponent, PeerEvaluationListComponent]
})
export class AssessmentModule { }
