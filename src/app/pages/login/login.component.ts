import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthService } from 'src/app/shared/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {
  email: string;
  password: string;
  constructor(public auth:AuthService,private router: Router) {}

  ngOnInit() {
  }
  ngOnDestroy() {
  }

  signIn(){
    this.auth.logIn(this.email,this.password)
    // this.router.navigate(['/dashboard'], { state: { email: this.email, message: true } });
  }
}
