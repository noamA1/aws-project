import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthLayoutRoutes } from './auth-layout.routing';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { LoginComponent } from '../../pages/login/login.component';
import { RegisterComponent } from '../../pages/register/register.component';
import { ForgotPasswordComponent } from 'src/app/pages/forgot-password/forgot-password.component';
import { ConfrimComponent } from 'src/app/pages/confrim/confrim.component';
import { UploadProfilePictureComponent } from 'src/app/pages/upload-profile-picture/upload-profile-picture.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AuthLayoutRoutes),
    FormsModule,
    MatDatepickerModule,
    MatNativeDateModule
    // NgbModule
  ],
  declarations: [
    LoginComponent,
    RegisterComponent,
    ForgotPasswordComponent,
    ConfrimComponent,
    UploadProfilePictureComponent,
  ],
  providers: [
    MatDatepickerModule,
    MatNativeDateModule,
  ],
})
export class AuthLayoutModule { }
