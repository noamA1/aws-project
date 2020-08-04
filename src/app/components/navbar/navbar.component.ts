import { AuthService } from 'src/app/shared/auth.service';
import { Component, OnInit } from '@angular/core';
import { ROUTES } from '../sidebar/sidebar.component';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  public focus;
  public listTitles: any[];
  public location: Location;
  userEmail;
  isconnected;
  message = false;
  user: any;
  email: string;
  firstName: string;
  lastName:string;
  gender: string;
  age:number;

  constructor(location: Location, private router: Router, public auth: AuthService) {
    this.location = location;
    if(this.router.getCurrentNavigation().extras.state !== undefined){
      this.userEmail = this.router.getCurrentNavigation().extras.state.email;
      this.email = this.userEmail;
      this.message = this.router.getCurrentNavigation().extras.state.message;

      if(this.message){
        this.getUserInfo(this.userEmail)
      }
    }
  }

  ngOnInit() {

  if(!this.message){
    this.auth.isloggedin().subscribe(data => {

      this.isconnected = data
      this.message = this.isconnected.message
      this.userEmail = this.isconnected.user
 
      if(this.message){
        this.getUserInfo(this.userEmail)
      }
    });
     
  }
    
    this.listTitles = ROUTES.filter(listTitle => listTitle);
  }
  getUserInfo(email){
    this.auth.getUser(email).subscribe(user => {

      this.user = user;
      this.firstName = this.user.items[0].firstName;
      this.lastName = this.user.items[0].lastName;
      this.gender = this.user.items[0].gender;
      this.age = this.user.items[0].age;
 
    })
  }
  getTitle(){
    var titlee = this.location.prepareExternalUrl(this.location.path());
    if(titlee.charAt(0) === '#'){
        titlee = titlee.slice( 1 );
    }

    for(var item = 0; item < this.listTitles.length; item++){
        if(this.listTitles[item].path === titlee){
            return this.listTitles[item].title;
        }
    }
    return 'Dashboard';
  }

  logOut(){
    this.auth.logout();
  }
}
