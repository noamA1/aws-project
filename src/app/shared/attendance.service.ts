import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AttendanceService {

  start: Date;
  end: Date;
  constructor(private http: HttpClient) { }

  entranceAttendance(fd){
    fd.append("email","noam0574@gmail.com")
    fd.append("dateTimeIn",`${new Date()}`)
    fd.append("dateTimeOut",`${new Date()}`)
    console.log(fd)
    this.http.post("http://ec2-3-234-56-126.compute-1.amazonaws.com/curd/postAttendance",fd)
    .subscribe(res =>{
      console.log(res);
    });
  }

  exitAttendance(){
    this.http.post("http://ec2-3-234-56-126.compute-1.amazonaws.com/curd/postAttendance",
    "fd").subscribe(res =>{
      console.log(res);
    });
  }
}
