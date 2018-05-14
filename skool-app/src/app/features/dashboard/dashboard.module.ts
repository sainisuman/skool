import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { LayoutComponent } from './components';
import { MaterialDesignModule } from '../../modules/material-design/material-design.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  imports: [
    CommonModule,
    MaterialDesignModule,
    DashboardRoutingModule
  ],
  declarations: [LayoutComponent]
})
export class DashboardModule { }
