import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutRoutingModule } from './layout-routing.module';
import { SharedModule } from '../shared/shared.module';

import { LayoutRootComponent } from './layout-root/layout-root.component';
import { RoleGuardService } from './services/role-guard/role-guard.service';

@NgModule({
  imports: [
    CommonModule,
    LayoutRoutingModule,
    SharedModule
  ],
  declarations: [LayoutRootComponent],
  providers: [
    RoleGuardService
  ]
})
export class LayoutModule { }
