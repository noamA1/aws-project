import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroupDirective, NgForm } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { Router } from '@angular/router';
import { AttendanceService } from 'src/app/shared/attendance.service';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-edit-shift',
  templateUrl: './edit-shift.component.html',
  styleUrls: ['./edit-shift.component.css']
})
export class EditShiftComponent implements OnInit {

  minDate: Date;
  maxDate: Date;
  startDate;
  endDate;
  startTime;
  endTime;
  computed;

  matcher = new MyErrorStateMatcher();
  constructor(private router: Router, private attendencesrervice: AttendanceService) { 
    const currentYear = new Date().getFullYear();
    this.minDate = new Date(currentYear - 1, 0, 1);
    this.maxDate = new Date();
    if (this.router.getCurrentNavigation().extras.state != null) {
      this.computed = this.router.getCurrentNavigation().extras.state.computed
      this.startDate = this.router.getCurrentNavigation().extras.state.datein
      this.startTime = this.router.getCurrentNavigation().extras.state.timein
      this.endDate = this.router.getCurrentNavigation().extras.state.dateout
      this.endTime = this.router.getCurrentNavigation().extras.state.timeout
    }
  }

  ngOnInit(): void {
  }

  updateShift(){
    this.attendencesrervice.updateAttendence(this.computed,this.startDate, this.startTime, this.endDate,this.endTime)
  }
}
