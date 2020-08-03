import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/auth.service';

declare interface RouteInfo {
  path: string;
  title: string;
  icon: string;
  class: string;
}
export const ROUTES: RouteInfo[] = [
  { path: '/dashboard', title: 'Dashboard', icon: 'ni-tv-2 text-primary', class: '' },
  { path: '/summary', title: 'Summary Table', icon: 'ni ni-bullet-list-67 text-red', class: '' },
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  public menuItems: any[];
  public isCollapsed = true;
  userEmail;
  isconnected;
  message: boolean;

  constructor(private router: Router, public auth: AuthService) {
    // this.userEmail = this.router.getCurrentNavigation().extras.state.email;
    // console.log(this.router.getCurrentNavigation().extras.state.email);
   }

  ngOnInit() {
    this.auth.isloggedin().subscribe(data => {
      this.isconnected = data
      this.message = this.isconnected.message
      if (this.message) {
        // this.userEmail = this.isconnected.user
        this.menuItems = ROUTES.filter(menuItem => menuItem);
        this.router.events.subscribe((event) => {
          this.isCollapsed = true;
        });
      }
      // console.log(this.userEmail); 
      else {
        this.menuItems = [
          { path: '/login', title: 'Log-In', icon: 'ni-tv-2 text-primary', class: '' },
          { path: '/register', title: 'Register',  icon:'ni-circle-08 text-pink', class: '' }
        ];
        this.router.events.subscribe((event) => {
          this.isCollapsed = true;
        });
      }
    });
  }

  logOut(){
    this.auth.logout();
  }
}
