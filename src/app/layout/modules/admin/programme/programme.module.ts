import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DragulaModule } from 'ng2-dragula';

import { SharedModule } from '../../../../shared/shared.module';

import { ProgrammeRoutingModule } from './programme-routing.module';
import { ProgrammeListComponent } from './programme-list/programme-list.component';
import { ProgrammeDetailsComponent } from './programme-details/programme-details.component';
import { CreateGroupModalComponent } from './programme-details/modals/create-group-modal/create-group-modal.component';
import { CreateYearModalComponent } from './programme-details/modals/create-year-modal/create-year-modal.component';
import { AddClassFormatModalComponent } from './programme-details/modals/add-class-format-modal/add-class-format-modal.component';
import { ViewCourseModalComponent } from './programme-details/modals/view-course-modal/view-course-modal.component';
import { EditCourseModalComponent } from './programme-details/modals/edit-course-modal/edit-course-modal.component';
import { CreateProgrammeComponent } from './create-programme/create-programme.component';
import { CreateModuleComponent } from './create-module/create-module.component';
import { ModuleAndCourseComponent } from './create-module/module-and-course/module-and-course.component';
import { ModuleComponent } from './create-module/module/module.component';
import { DiplomaPaperComponent } from './create-module/diploma-paper/diploma-paper.component';
import { AddParticipantModalComponent } from './programme-details/modals/add-participant-modal/add-participant-modal.component';
import { ProgrammeClassFormatComponent } from './programme-details/programme-class-format/programme-class-format.component';
import { ProgrammeStudentListComponent } from './programme-details/programme-student-list/programme-student-list.component';
import { EditModuleModalComponent } from './programme-details/modals/edit-module-modal/edit-module-modal.component';

@NgModule({
  imports: [
    CommonModule,
    DragulaModule,
    ProgrammeRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule
  ],
  declarations: [
    ProgrammeListComponent,
    ProgrammeDetailsComponent,
    CreateGroupModalComponent,
    CreateYearModalComponent,
    AddClassFormatModalComponent,
    ViewCourseModalComponent,
    EditCourseModalComponent,
    CreateProgrammeComponent,
    CreateModuleComponent,
    ModuleAndCourseComponent,
    ModuleComponent,
    DiplomaPaperComponent,
    AddParticipantModalComponent,
    ProgrammeClassFormatComponent,
    ProgrammeStudentListComponent,
    EditModuleModalComponent,
  ]
})
export class ProgrammeModule { }
