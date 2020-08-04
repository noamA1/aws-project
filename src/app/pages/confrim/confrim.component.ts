import {  Router } from '@angular/router';
import { AuthService } from 'src/app/shared/auth.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-confrim',
  templateUrl: './confrim.component.html',
  styleUrls: ['./confrim.component.css']
})
export class ConfrimComponent implements OnInit {

  code;
  userEmail;

  constructor(public auth: AuthService, private router: Router) { 
    this.userEmail = this.router.getCurrentNavigation().extras.state.email;
  }

  ngOnInit(): void {
  }

  confrimCode(){
    this.auth.confirmFunction(this.userEmail, +this.code)
  }
}
