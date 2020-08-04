import { Injectable } from '@angular/core';
import { Chart } from 'node_modules/chart.js'

@Injectable({
  providedIn: 'root'
})
export class ChartService {

  constructor() { }

  createSumChat(xArray, yArray) {
    new Chart("sumHours", {
      type: 'bar',
      data: {
        labels: xArray,
        datasets: [{
          label: 'Sum Hours',
          data: yArray,
          fill: false,
          pointBorderColor: 'rgba(102, 102, 255, 1)',
          pointRadius: 4,
          borderColor: [
            'rgba(102, 102, 255, 1)',
          ],
          borderWidth: 1
        }]
      },
      options: {
        legend: {
          labels: {
            fontColor: "white",
            fontSize: 18
          }
        },
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true,
              fontColor: 'rgba(0, 0, 0, 1)'
            }
          }],
          xAxes: [{
            ticks: {
              fontColor: 'rgba(0, 0, 0, 1)'
            }
          }]
        },
      }
    });
  }
  createCountChat(xArray, yArray) {
    new Chart("countShifts", {
      type: 'bar',
      data: {
        labels: xArray,
        datasets: [{
          label: 'Count Shifts',
          data: yArray,
          fill: false,
          pointBorderColor: 'rgba(102, 102, 255, 1)',
          pointRadius: 4,
          borderColor: [
            'rgba(102, 102, 255, 1)',
          ],
          borderWidth: 1
        }]
      },
      options: {
        legend: {
          labels: {
            fontColor: "white",
            fontSize: 18
          }
        },
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true,
              fontColor: 'rgba(0, 0, 0, 1)'
            }
          }],
          xAxes: [{
            ticks: {
              fontColor: 'rgba(0, 0, 0, 1)'
            }
          }]
        },
      }
    });
  }
}
