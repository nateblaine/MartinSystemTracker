import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-calendar-display',
  templateUrl: './calendar-display.component.html',
  styleUrls: ['./calendar-display.component.scss']
})
export class CalendarDisplayComponent implements OnInit {

  now: string;

  listOfDates: string[];

  constructor() { }

  ngOnInit() {
    const momentNow = moment();
    this.now = momentNow.format('LLLL');
    this.createListOfDates(momentNow)
    console.log(this.listOfDates);
  }

  // I dont really understand moment rn....
  createListOfDates(inNow) {
    for (let i = -5; i < -2 ; i += 1 ) {
      console.log(inNow.day(i).format('LLLL'))
      // this.listOfDates.push(inNow.day(i).format('LLLL'))
    }
    // this.createListOfDates(inNow.format('LLLL'))
    for (let i = 1; i < 4 ; i += 1 ) {
      console.log(inNow.day(i).format('LLLL'))
      // this.listOfDates.push(inNow.day(i).format('LLLL'))
    }
  }

}
