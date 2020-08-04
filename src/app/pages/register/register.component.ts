import { Router } from '@angular/router';
import { AuthService } from './../../shared/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  gender: string;
  firstname: string;
  lastname: string;
  email: string;
  phone: string;
  password: string;
  minDate: Date;
  maxDate: Date;
  birth:Date;



  constructor(public auth: AuthService, private router: Router) {
    const currentYear = new Date().getFullYear();
    this.minDate = new Date(currentYear - 100, 0, 1);
    this.maxDate = new Date(currentYear - 1, 0, 1);
  }

  ngOnInit() {
  }

  signUp() {
    this.auth.register(this.email, this.password, this.firstname, this.lastname, this.gender, this.birth);
  }
}