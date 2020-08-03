import { AuthService } from 'src/app/shared/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {

  isconnected;
  userEmail;
  user: any;
  email: string;
  first: string;
  last:string;
  gender: string;
  age:number;
  id;

  constructor(private auth:AuthService) { }

  ngOnInit() {
    this.auth.isloggedin().subscribe(data => {
      this.isconnected = data
      if (this.isconnected.message){
        this.userEmail = this.isconnected.user
      }
      this.auth.getUser(this.userEmail).subscribe(user => {
        this.user = user;
        this.email = this.user.items[0].email;
        this.first = this.user.items[0].firstName;
        this.last = this.user.items[0].lastName;
        this.gender = this.user.items[0].gender;
        this.age = this.user.items[0].age;
        this.id = this.user.items[0].id;
      })
    }); 
  }

  editProfile(){
    this.auth.updateProfile(this.first, this.last, this.id, this.age, this.gender)
  }
}
