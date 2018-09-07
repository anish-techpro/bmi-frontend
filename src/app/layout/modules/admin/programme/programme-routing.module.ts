import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProgrammeListComponent } from './programme-list/programme-list.component';
import { ProgrammeDetailsComponent } from './programme-details/programme-details.component';
import { CreateProgrammeComponent } from './create-programme/create-programme.component';
import { CreateModuleComponent } from './create-module/create-module.component';

const routes: Routes = [
  {
    path: '',
    component: ProgrammeListComponent
  },
  {
    path: 'create',
    component: CreateProgrammeComponent
  },
  {
    path: ':id',
    component: ProgrammeDetailsComponent
  },
  {
    path: ':id/create-module',
    component: CreateModuleComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProgrammeRoutingModule { }
