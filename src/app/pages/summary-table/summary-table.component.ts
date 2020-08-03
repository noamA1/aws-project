import { Component, OnInit } from '@angular/core';
import { AttendanceService } from 'src/app/shared/attendance.service';
import { AuthService } from 'src/app/shared/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-summary-table',
  templateUrl: './summary-table.component.html',
  styleUrls: ['./summary-table.component.css']
})
export class SummaryTableComponent implements OnInit {

  constructor(private attendanceservice: AttendanceService, private auth: AuthService,private router: Router) { }

  userEmail;
  isconnected;
  attendanceData;
  attendanceArray = [];
  


  ngOnInit(): void {

    this.auth.isloggedin().subscribe(data => {
      this.isconnected = data
      if (this.isconnected.message) {
        this.userEmail = this.isconnected.user
      }
    });
    this.attendanceservice.getData().subscribe(
      data => {
        this.attendanceData = data;
        this.attendanceArray = this.attendanceData.items;
        console.log(this.attendanceArray)
      }
    )
  }

  deleteShift() {

  }

  setEndShift(id){
    console.log(id)
    this.router.navigate(['/shifts/add'], { state: { computed: id }});
  }

  updateShift(id, din, tin, dout, tout){
    console.log(id)
    console.log(din)
    console.log(tin)
    console.log(dout)
    console.log(tout)
    this.router.navigate(['/shifts/edit'], { state: { computed: id, datein: din, timein: din, dateout: dout,timeout: tout}});
    // routerLink="/shifts/edit"
  }
}
