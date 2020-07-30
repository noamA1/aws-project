import {  ActivatedRoute } from '@angular/router';
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


  
  constructor(public auth: AuthService, private activatedroute:ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedroute.params.subscribe(parms =>{
      this.userEmail = parms.email
      console.log(this.userEmail)
    })
  }

  confrimCode(){
    this.auth.confirmFunction(this.userEmail, +this.code)
  }
}
