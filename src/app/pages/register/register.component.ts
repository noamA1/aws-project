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



  constructor(public auth: AuthService, private router: Router) {
  }

  ngOnInit() {
  }

  signUp() {

    this.auth.register(this.email, this.password, this.firstname, this.lastname, this.gender);
    
  }
}