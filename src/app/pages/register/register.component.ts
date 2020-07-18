import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  genders = ['male', 'female'];
  gender: string;
  firstname: string;
  lastname: string;
  email: string;
  phone: string;
  password: string;
  constructor() { }

  ngOnInit() {
  }

  signUp(){
    console.log(this.gender)
    console.log(this.firstname)
    console.log(this.lastname)
    console.log(this.email)
    console.log(this.password)

  }
}
