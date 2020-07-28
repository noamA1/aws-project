import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthService } from 'src/app/shared/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {
  email: string;
  password: string;
  constructor(public auth:AuthService) {}

  ngOnInit() {
  }
  ngOnDestroy() {
  }

  signIn(){
    this.auth.logIn(this.email,this.password)
  }
}
