import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AttendanceService {

  constructor(private http: HttpClient) { }

  entranceAttendance(){
    this.http.post("http://ec2-3-234-56-126.compute-1.amazonaws.com/curd/postAttendance",
    "fd").subscribe(res =>{
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
