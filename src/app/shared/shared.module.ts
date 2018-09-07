import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CKEditorModule } from 'ng2-ckeditor';
import { AngularDateTimePickerModule } from 'angular2-datetimepicker';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { CkeditorComponent } from './ckeditor/ckeditor.component';
import { DatetimepickerComponent } from './datetimepicker/datetimepicker.component';
import { InboxComponent } from './inbox/inbox.component';
import { FilterPipe } from './pipes/filter.pipe';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    CKEditorModule,
    AngularDateTimePickerModule
  ],
  declarations: [
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    CkeditorComponent,
    DatetimepickerComponent,
    InboxComponent,
    FilterPipe
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    CkeditorComponent,
    DatetimepickerComponent,
    InboxComponent,
    FilterPipe
  ]
})
export class SharedModule { }
