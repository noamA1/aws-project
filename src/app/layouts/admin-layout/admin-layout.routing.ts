import { Routes } from '@angular/router';

import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import { UserProfileComponent } from '../../pages/user-profile/user-profile.component';
import { EditProfileComponent } from './../../pages/edit-profile/edit-profile.component';
import { SummaryTableComponent } from 'src/app/pages/summary-table/summary-table.component';
import { AddShiftComponent } from 'src/app/pages/add-shift/add-shift.component';
import { EditShiftComponent } from 'src/app/pages/edit-shift/edit-shift.component';
import { UploadProfilePictureComponent } from 'src/app/pages/upload-profile-picture/upload-profile-picture.component';

export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard',      component: DashboardComponent },
    { path: 'summary',         component: SummaryTableComponent },
    { path: 'upload',       component: UploadProfilePictureComponent },
    { path: 'user', children: [
        { path: 'profile',   component: UserProfileComponent },
        { path: 'edit', component: EditProfileComponent },
    ] },
    { path: 'shifts', children: [
        { path: 'add',   component: AddShiftComponent },
        { path: 'edit', component: EditShiftComponent },
    ] },
   
];
