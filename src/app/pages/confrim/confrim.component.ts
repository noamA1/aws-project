import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-confrim',
  templateUrl: './confrim.component.html',
  styleUrls: ['./confrim.component.css']
})
export class ConfrimComponent implements OnInit {

  code: string;
  constructor() { }

  ngOnInit(): void {
  }

  confrimCode(){
    console.log(this.code)
  }
}
