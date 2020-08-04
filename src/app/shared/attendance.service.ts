import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { DatePipe } from '@angular/common';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AttendanceService {

  pipe = new DatePipe('en-US');
  now = Date.now();
  mySimpleFormat = this.pipe.transform(this.now, 'dd/MM/yyyy');
  myShortTime = this.pipe.transform(this.now, 'fullTime')
  message;
  similar;

  constructor(private http: HttpClient, private router: Router) { }

  entranceAttendance(fd) {
    console.log(fd)
    this.http.post("http://ec2-3-234-56-126.compute-1.amazonaws.com/auth/post-image", fd).subscribe(
      res => {
        this.message = res;
        if (this.message.message === "image uploaded") {

          this.http.get("http://ec2-3-234-56-126.compute-1.amazonaws.com/crud/compare").subscribe(
            res => {
              this.similar = res;
              console.log(this.myShortTime)
              if (this.similar.similar) {
                this.http.post("http://ec2-3-234-56-126.compute-1.amazonaws.com/crud/postEntrance"
                  , { dateIn: this.mySimpleFormat, timeIn: this.myShortTime })
                  .subscribe(res => {
                    console.log(res);
                    this.router.navigate(['/summary']);
                  });
              }
            }
          )
        }
      });
  }

  exitAttendance(id, fd) {
    this.http.post("http://ec2-3-234-56-126.compute-1.amazonaws.com/auth/post-image", fd).subscribe(
      res => {
        this.message = res;
        if (this.message.message === "image uploaded") {

          this.http.get("http://ec2-3-234-56-126.compute-1.amazonaws.com/crud/compare").subscribe(
            res => {
              this.similar = res;
              console.log(this.myShortTime)
              if (this.similar.similar) {

                this.http.post("http://ec2-3-234-56-126.compute-1.amazonaws.com/crud/postExit"
                  , { dateOut: this.mySimpleFormat, timeOut: this.myShortTime, computed: id })
                  .subscribe(res => {
                    console.log(res);
                    this.router.navigate(['/summary']);
                  });
              }
            }
          )
        }
      });
  }

  getData() {
    return this.http.get("http://ec2-3-234-56-126.compute-1.amazonaws.com/crud/getAttendance")
  }

  updateAttendence(computed, sd, st, ed,et){
    this.http.post("http://ec2-3-234-56-126.compute-1.amazonaws.com/crud/editAttendance"
                  , { computed: computed,  dateIn: sd, timeIn: st, dateOut:ed,timeOut:et})
                  .subscribe(res => {
                    console.log(res);
                    this.router.navigate(['/summary']);
                  });
  }

  deleteShift(computed){
    this.http.post("http://ec2-3-234-56-126.compute-1.amazonaws.com/crud/deleteAttendance"
                  , { computed: computed})
                  .subscribe(res => {
                    console.log(res);
                    this.router.navigate(['/summary']);
                  });
  }
}
