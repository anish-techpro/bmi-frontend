import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HttpClient, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FullCalendarModule } from 'ng-fullcalendar';
import { EmbedVideo } from 'ngx-embed-video';

import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared/shared.module';

// import { MultiselectDropdownModule } from 'angular-2-dropdown-multiselect';
// import { Ng4LoadingSpinnerModule } from 'ng4-loading-spinner';

import { AppComponent } from './app.component';
import { UiService } from './services/ui/ui.service';
import { RouterModule } from '@angular/router';
import { DragulaModule } from 'ng2-dragula';
import { HelperService } from './services/helper/helper.service';
import { UserService } from './services/user/user.service';
import { AuthGuardService } from './services/route-guards/auth-guard/auth-guard.service';
import { NoAuthGuardService } from './services/route-guards/no-auth-guard/no-auth-guard.service';
import { ApiInterceptor } from './services/api-interceptor/api-interceptor';
import { EventService } from './services/event/event.service';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    AppRoutingModule,
    SharedModule,
    FullCalendarModule,
    DragulaModule.forRoot(),
    EmbedVideo.forRoot()
  ],
  declarations: [AppComponent],
  providers: [
    UiService,
    HelperService,
    UserService,
    AuthGuardService,
    NoAuthGuardService,
    EventService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ApiInterceptor,
      multi: true
    }
    // StorageService, 
    // ApiService, 
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
