import { Routes } from '@angular/router';

import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import { UserProfileComponent } from '../../pages/user-profile/user-profile.component';
import { TablesComponent } from '../../pages/tables/tables.component';
import { SummaryTableComponent } from 'src/app/pages/summary-table/summary-table.component';
import { AddShiftComponent } from 'src/app/pages/add-shift/add-shift.component';

export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard',      component: DashboardComponent },
    { path: 'user-profile',   component: UserProfileComponent },
    { path: 'summary',         component: SummaryTableComponent },
    { path: 'add-shift',          component: AddShiftComponent },
];
