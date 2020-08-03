import { Component, OnInit } from '@angular/core';
import { AttendanceService } from 'src/app/shared/attendance.service';
import { AuthService } from 'src/app/shared/auth.service';
import { Router } from '@angular/router';
import { DatePipe } from '@angular/common';
import * as moment from 'moment';


@Component({
  selector: 'app-summary-table',
  templateUrl: './summary-table.component.html',
  styleUrls: ['./summary-table.component.css']
})
export class SummaryTableComponent implements OnInit {

  constructor(private attendanceservice: AttendanceService, private auth:
    AuthService, private router: Router) { }

  userEmail;
  isconnected;
  attendanceData;
  attendanceArray = [];
  array = [];
  // pipe = new DatePipe();
  pipe = new DatePipe('en-US');
  now = Date.now();
  // mySimpleFormat = this.pipe.transform(this.now, 'dd/MM/yyyy');
  // myShortTime = this.pipe.transform(this.now, 'fullTime')
  page = 1;
  pageSize = 10;



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
        this.attendanceArray.forEach(element => {
          // moment.locale('en-il');
          let date = element.dateIn + ' ' + element.timeIn;
          let date1 = element.dateOut + ' ' + element.timeOut;
          let time:any;
          let time1: any;
          time = moment(date, 'YYYY-MM-DD HH:mm:ss a');
          time1 = moment(date1, 'YYYY-MM-DD HH:mm:ss a');
          this.array.push({
            computed:element.computed,
            dateIn: element.dateIn,
            timeIn: element.timeIn,
            dateOut: element.dateOut,
            timeOut: element.timeOut,
            diff:moment.duration(time1 - time).asHours().toFixed(2)
          })
        });
        
        console.log(this.array)
      }
    )
  }

  deleteShift() {

  }

  setEndShift(id) {
    this.router.navigate(['/shifts/add'], { state: { computed: id } });
  }

  updateShift(id, din, tin, dout, tout) {
    this.router.navigate(['/shifts/edit'], {
      state: {
        computed: id, datein: din,
        timein: tin, dateout: dout, timeout: tout
      }
    });
  }
}
