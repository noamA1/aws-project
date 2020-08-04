import { ChartService } from './../../shared/chart.service';
import { AuthService } from 'src/app/shared/auth.service';
import { Component, OnInit } from '@angular/core';
import Chart from 'chart.js';
import * as moment from 'moment';

// core components
import {
  chartOptions,
  parseOptions,
  chartExample1,
  chartExample2
} from "../../variables/charts";
import { Router } from '@angular/router';
import { AttendanceService } from 'src/app/shared/attendance.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  public datasets: any;
  public data =[];
  public clicked: boolean = true;
  public clicked1: boolean = false;
  userEmail;
  isconnected;
  attendanceData;
  attendanceArray = [];
  array = [];
  sumDiffArray = [{
    January: 'January',
    sumJanuary: 0,
    countJanuary: 0,
    February: 'February',
    countFebruary: 0,
    sumFebruary: 0,
    March: 'March',
    countMarch: 0,
    sumMarch: 0,
    April: 'April',
    countApril: 0,
    sumApril: 0,
    May: 'May',
    countMay: 0,
    sumMay: 0,
    June: 'June',
    countJune: 0,
    sumJune: 0,
    July: 'July',
    countJuly: 0,
    sumJuly: 0,
    August: 'August',
    countAugust: 0,
    sumAugust: 0,
    September: 'September',
    countSeptember: 0,
    sumSeptember: 0,
    October: 'October',
    countOctober: 0,
    sumOctober: 0,
    November: 'November',
    countNovember: 0,
    sumNovember: 0,
    December: 'December',
    countDecember: 0,
    sumDecember: 0
  }];
  countData = [];
  lables = ['January','February','March','April','May','June','July','August','September','October','November','December']

  constructor(private auth: AuthService, private router: Router, 
    private attendanceservice: AttendanceService, private chartservice: ChartService) {
    // this.userEmail = this.router.getCurrentNavigation().extras.state.email;
  }

  ngOnInit() {
    this.auth.isloggedin().subscribe(data => {
      this.isconnected = data
      if (this.isconnected.message) {
        this.userEmail = this.isconnected.user
      }
      this.attendanceservice.getData().subscribe(
        data => {
          this.attendanceData = data;
          this.attendanceArray = this.attendanceData.items;
          this.attendanceArray.forEach(element => {
            let date = element.dateIn + ' ' + element.timeIn;
            let date1 = element.dateOut + ' ' + element.timeOut;
            let time: any;
            let time1: any;
            time = moment(date, 'YYYY-MM-DD HH:mm:ss a');
            time1 = moment(date1, 'YYYY-MM-DD HH:mm:ss a');
            this.array.push({
              computed: element.computed,
              dateIn: element.dateIn,
              timeIn: element.timeIn,
              dateOut: element.dateOut,
              timeOut: element.timeOut,
              diff: moment.duration(time1 - time).asHours().toFixed(2)
            })

          });
          this.array.forEach(element => {
            if (element.dateIn.substring(3, 5) == '01') {
              this.sumDiffArray[0].sumJanuary += Number(element.diff)
              this.sumDiffArray[0].countJanuary +=1
            }
            if (element.dateIn.substring(3, 5) == '02') {
              this.sumDiffArray[0].sumFebruary += Number(element.diff)
              this.sumDiffArray[0].countFebruary +=1
            }
            if (element.dateIn.substring(3, 5) == '03') {
              this.sumDiffArray[0].sumMarch += Number(element.diff)
              this.sumDiffArray[0].countMarch +=1
            }
            if (element.dateIn.substring(3, 5) == '04') {
              this.sumDiffArray[0].sumApril += Number(element.diff)
              this.sumDiffArray[0].countApril +=1
            }
            if (element.dateIn.substring(3, 5) == '05') {
              this.sumDiffArray[0].sumMay += Number(element.diff)
              this.sumDiffArray[0].countMay +=1
            }
            if (element.dateIn.substring(3, 5) == '06') {
              this.sumDiffArray[0].sumJune += Number(element.diff)
              this.sumDiffArray[0].countJune +=1
            }
            if (element.dateIn.substring(3, 5) == '07') {
              this.sumDiffArray[0].sumJuly += Number(element.diff)
              this.sumDiffArray[0].countJuly +=1
            }
            if (element.dateIn.substring(3, 5) == '08') {
              this.sumDiffArray[0].sumAugust += Number(element.diff)
              this.sumDiffArray[0].countAugust +=1
            }
            if (element.dateIn.substring(3, 5) == '09') {
              this.sumDiffArray[0].sumSeptember += Number(element.diff)
              this.sumDiffArray[0].countSeptember +=1
            }
            if (element.dateIn.substring(3, 5) == '10') {
              this.sumDiffArray[0].sumOctober += Number(element.diff)
              this.sumDiffArray[0].countOctober +=1
            }
            if (element.dateIn.substring(3, 5) == '11') {
              this.sumDiffArray[0].sumNovember += Number(element.diff)
              this.sumDiffArray[0].countNovember +=1
            } 
            if (element.dateIn.substring(3, 5) == '12') {
              this.sumDiffArray[0].sumDecember += Number(element.diff)
              this.sumDiffArray[0].countDecember +=1
            }
          })
          this.data.push(
            this.sumDiffArray[0].sumJanuary,
            this.sumDiffArray[0].sumFebruary,
            this.sumDiffArray[0].sumMarch,
            this.sumDiffArray[0].sumApril,
            this.sumDiffArray[0].sumMay,
            this.sumDiffArray[0].sumJune,
            this.sumDiffArray[0].sumJuly,
            this.sumDiffArray[0].sumAugust,
            this.sumDiffArray[0].sumSeptember,
            this.sumDiffArray[0].sumOctober,
            this.sumDiffArray[0].sumNovember,
            this.sumDiffArray[0].sumDecember,
          )
          this.countData.push(
            this.sumDiffArray[0].countJanuary,
            this.sumDiffArray[0].countFebruary,
            this.sumDiffArray[0].countMarch,
            this.sumDiffArray[0].countApril,
            this.sumDiffArray[0].countMay,
            this.sumDiffArray[0].countJune,
            this.sumDiffArray[0].countJuly,
            this.sumDiffArray[0].countAugust,
            this.sumDiffArray[0].countSeptember,
            this.sumDiffArray[0].countOctober,
            this.sumDiffArray[0].countNovember,
            this.sumDiffArray[0].countDecember,
          )
          this.chartservice.createSumChat(this.lables,this.data)
          this.chartservice.createCountChat(this.lables, this.countData)
          console.log(this.countData)
        })
    });

    parseOptions(Chart, chartOptions());
  }

}
