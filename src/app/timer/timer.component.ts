import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css']
})
export class TimerComponent implements OnInit {
  target_date:any = 1518822000000;
  days:any;
  hours:any;
  minutes:any;
  seconds:any;
  currentDate:any;
  seconds_left:any;
 countdown = document.getElementById("tiles"); 
  constructor() { }

  ngOnInit() {
    console.log(this.target_date)
    this.getCoutDown();
    setInterval(()=>{
      this.getCoutDown()
    },1000)
  }
  getCoutDown(){

  this.currentDate = new Date().getTime();
  this.seconds_left = (this.target_date - this.currentDate) /1000;

  let daysTemp= (this.seconds_left)/ 86400
  this.days= this.pad(parseInt(daysTemp.toString()));
  this.seconds_left = this.seconds_left % 86400;

	let hoursTemp = (this.seconds_left)/3600
  this.hours = this.pad(parseInt( hoursTemp.toString() ));
	this.seconds_left =this.seconds_left % 3600;
  
  let minTemp = this.seconds_left/60
  this.minutes = this.pad( parseInt(minTemp.toString()));
  
  let seTemp = this.seconds_left %60
	this.seconds = this.pad( parseInt(seTemp.toString()));

    // this.countdown.innerHTML = "<span>" +this.days + "</span><span>" + this.hours + "</span><span>" +this. minutes + "</span><span>" + this.seconds + "</span>"; 
    
  }

  pad(n){
    return (n<10 ?'0':'')+n;
  }

}
