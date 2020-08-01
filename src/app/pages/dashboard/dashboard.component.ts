import { AuthService } from 'src/app/shared/auth.service';
import { Component, OnInit } from '@angular/core';
import Chart from 'chart.js';

// core components
import {
  chartOptions,
  parseOptions,
  chartExample1,
  chartExample2
} from "../../variables/charts";
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  public datasets: any;
  public data: any;
  public clicked: boolean = true;
  public clicked1: boolean = false;
  userEmail;
  isconnected;

  constructor(private auth: AuthService, private router: Router) {
    // this.userEmail = this.router.getCurrentNavigation().extras.state.email;
   }

  ngOnInit() {
    this.auth.isloggedin().subscribe(data => {
      this.isconnected = data
      if (this.isconnected.message){
        this.userEmail = this.isconnected.user
      }
      console.log(this.userEmail); 
    });
  
    this.datasets = [
      [0, 20, 10, 30, 15, 40, 20, 60, 60],
      [0, 20, 5, 25, 10, 30, 15, 40, 40]
    ];
    this.data = this.datasets[0];


    var chartOrders = document.getElementById('chart-orders');

    parseOptions(Chart, chartOptions());


    var ordersChart = new Chart(chartOrders, {
      type: 'bar',
      options: chartExample2.options,
      data: chartExample2.data
    });
  }

  // public updateOptions() {
  //   this.salesChart.data.datasets[0].data = this.data;
  //   this.salesChart.update();
  // }

}
