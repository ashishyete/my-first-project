import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-systime',
  templateUrl: './systime.component.html',
  styleUrls: ['./systime.component.css']
})
export class SystimeComponent implements OnInit {

  timeMessage : string ='null';
  someNumber : number =10;

  constructor() { 
    setInterval(()=>{
      this.timeMessage = new Date().toLocaleTimeString();
    },1000);
    }

  ngOnInit(): void {
  }

  addTwoNumbers(a:number, b:number){
    return a+b;
  }

}
