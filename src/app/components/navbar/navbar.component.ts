import { AuthService } from 'src/app/shared/auth.service';
import { Component, OnInit, ElementRef } from '@angular/core';
import { ROUTES } from '../sidebar/sidebar.component';
import { Location, LocationStrategy, PathLocationStrategy } from '@angular/common';
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
  message: boolean;
  user: any;
  email: string;
  firstName: string;
  lastName:string;
  gender: string;
  age:number;

  constructor(location: Location,  private element: ElementRef, private router: Router, public auth: AuthService) {
    this.location = location;
    this.userEmail = this.router.getCurrentNavigation().extras.state.email;
    console.log(this.router.getCurrentNavigation().extras.state.email);
  }

  ngOnInit() {
    this.auth.isloggedin().subscribe(data => {
      this.isconnected = data
      this.message = this.isconnected.message
  

      this.auth.getUser(this.userEmail).subscribe(user => {
        this.user = user;
        this.email = this.user.items[0].email;
        this.firstName = this.user.items[0].firstName;
        this.lastName = this.user.items[0].lastName;
        this.gender = this.user.items[0].gender;
        this.age = this.user.items[0].age;
        console.log(this.firstName); 
        console.log(this.lastName); 
      })
      // console.log(this.userEmail); 
    });
    this.listTitles = ROUTES.filter(listTitle => listTitle);
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
