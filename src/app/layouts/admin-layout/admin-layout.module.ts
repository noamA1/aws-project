import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ClipboardModule } from 'ngx-clipboard';
import { WebcamModule } from 'ngx-webcam';

import { AdminLayoutRoutes } from './admin-layout.routing';
import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import { UserProfileComponent } from '../../pages/user-profile/user-profile.component';
import { TablesComponent } from '../../pages/tables/tables.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SummaryTableComponent } from 'src/app/pages/summary-table/summary-table.component';
import { AddShiftComponent } from 'src/app/pages/add-shift/add-shift.component';
import { EditProfileComponent } from 'src/app/pages/edit-profile/edit-profile.component';
import { EditShiftComponent } from 'src/app/pages/edit-shift/edit-shift.component';
import { MatCardModule } from '@angular/material/card';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
// import { ToastrModule } from 'ngx-toastr';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    HttpClientModule,
    NgbModule,
    ClipboardModule,
    WebcamModule ,
    MatCardModule,
    MatDatepickerModule,
    MatNativeDateModule
  ],
  declarations: [
    DashboardComponent,
    UserProfileComponent,
    TablesComponent,
    SummaryTableComponent,
    AddShiftComponent,
    EditProfileComponent,
    EditShiftComponent,
  ],
  providers: [  
    MatDatepickerModule,
    MatNativeDateModule  
  ],
})

export class AdminLayoutModule {}
