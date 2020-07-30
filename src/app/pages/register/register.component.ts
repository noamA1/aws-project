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

  fileObj: File;

  constructor(public auth: AuthService, private router: Router) {
  }

  ngOnInit() {
  }

  signUp() {

    this.auth.register(this.email, this.password, this.firstname, this.lastname, this.gender);
    
  }

  onFilePicked(event) {
    this.fileObj = event.target.files[0] as File;
  }
  
  sendImge() {
    console.log(this.fileObj);
    const fd = new FormData();
    fd.append('image', this.fileObj, this.fileObj.name);
    this.auth.sendImage(fd);
  }
}