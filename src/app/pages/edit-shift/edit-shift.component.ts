import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroupDirective, NgForm } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { Time } from '@angular/common';

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
  startDate: Date;
  endDate: Date;
  startTime: Time;
  endTime: Time;

  matcher = new MyErrorStateMatcher();
  constructor() { 
    const currentYear = new Date().getFullYear();
    this.minDate = new Date(currentYear - 1, 0, 1);
    this.maxDate = new Date();
  }

  ngOnInit(): void {

  }

  updateShift(){
    console.log(this.startDate)
    console.log(this.endDate)
    console.log(this.startTime)
    console.log(this.endTime)
  }
}
