import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClosedBookComponent } from './closed-book/closed-book.component';
import { OpenBookComponent } from './open-book/open-book.component';
import { InClassComponent } from './in-class/in-class.component';
import { TakeHomeComponent } from './take-home/take-home.component';
import { PeerEvaluationListComponent } from './peer-evaluation/peer-evaluation-list/peer-evaluation-list.component';


const routes: Routes = [
    {
        path: 'closed-book',
        component: ClosedBookComponent
    },
    {
        path: 'open-book',
        component: OpenBookComponent
    },
    {
        path: 'in-class',
        component: InClassComponent
    },
    {
        path: 'take-home',
        component: TakeHomeComponent
    },
    {
        path: 'peer-evaluation',
        component: PeerEvaluationListComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class AssessmentRoutingModule { }