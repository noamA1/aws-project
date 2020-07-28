import { AuthService } from 'src/app/shared/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {

  user: any;
  email: string;
  first: string;
  last:string;
  gender: string;
  age:number;

  constructor(private auth:AuthService) { }

  ngOnInit() {
    this.auth.getUser().subscribe(user => {
      this.user = user;
      this.email = this.user.items[0].email;
      this.first = this.user.items[0].firstName;
      this.last = this.user.items[0].lastName;
      this.gender = this.user.items[0].gender;
      this.age = this.user.items[0].age;
      console.log(this.email)
      console.log(this.first)
      console.log(this.last)
      console.log(this.age)
      console.log(this.gender)


      // console.log(this.user.items[0])
    })
    
  }

}
