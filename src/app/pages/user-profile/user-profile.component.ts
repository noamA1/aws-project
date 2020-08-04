import { Router, NavigationEnd } from '@angular/router';
import { AuthService } from 'src/app/shared/auth.service';
import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';


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
  age;
  id;
  minDate: Date;
  maxDate: Date;
  birth;

  constructor(private auth:AuthService, private router: Router) { 
    const currentYear = new Date().getFullYear();
    this.minDate = new Date(currentYear - 100, 0, 1);
    this.maxDate = new Date(currentYear - 1, 0, 1);
  }

  ngOnInit() {
    this.auth.isloggedin().subscribe(data => {
      this.isconnected = data
      if (this.isconnected.message){
        this.userEmail = this.isconnected.user
      }
      this.auth.getUser(this.userEmail).subscribe(user => {
        moment.locale('en-il');
        this.user = user;
        this.email = this.user.items[0].email;
        this.first = this.user.items[0].firstName;
        this.last = this.user.items[0].lastName;
        this.gender = this.user.items[0].gender;
        if(!(this.user.items[0].age.includes('/'))){
          this.birth = moment(this.user.items[0].age).format()
        }
        else{
          this.birth = this.user.items[0].age
        }
        let tempdate = this.user.items[0].age +' '+ '5:07:50 PM GMT+03:00'
        let birthDay = new Date(moment(tempdate, 'DD/MM/YYYY HH:mm:ss a').format());
        this.age = (moment().diff(birthDay, 'months')/12).toFixed(2)
        this.id = this.user.items[0].id;
      })
    }); 
  }

  editProfile(){
    console.log(this.birth)
    this.auth.updateProfile(this.first, this.last, this.id, this.birth, this.gender)
    
  }
  editProfilePicture(){
    
  }
}
