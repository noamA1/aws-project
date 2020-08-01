import { Routes } from '@angular/router';

import { LoginComponent } from '../../pages/login/login.component';
import { RegisterComponent } from '../../pages/register/register.component';
import { ForgotPasswordComponent } from 'src/app/pages/forgot-password/forgot-password.component';
import { ConfrimComponent } from 'src/app/pages/confrim/confrim.component';
import { UploadProfilePictureComponent } from 'src/app/pages/upload-profile-picture/upload-profile-picture.component';

export const AuthLayoutRoutes: Routes = [
    { path: 'login',          component: LoginComponent },
    { path: 'register',       component: RegisterComponent },
    { path: 'register-confrim',       component: ConfrimComponent },
    { path: 'forgot-password',       component: ForgotPasswordComponent },
    // { path: 'upload',       component: UploadProfilePictureComponent }
];
