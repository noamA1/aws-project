import { Routes } from '@angular/router';

import { LoginComponent } from '../../pages/login/login.component';
import { RegisterComponent } from '../../pages/register/register.component';
import { ConfrimComponent } from 'src/app/pages/confrim/confrim.component';
import { SecureInnerPagesGuard } from 'src/app/shared/gurad/secure-inner-pages.guard';

export const AuthLayoutRoutes: Routes = [
    { path: 'login',          component: LoginComponent, canActivate: [SecureInnerPagesGuard] },
    { path: 'register',       component: RegisterComponent, canActivate: [SecureInnerPagesGuard] },
    { path: 'register-confrim',       component: ConfrimComponent, canActivate: [SecureInnerPagesGuard] },
];
