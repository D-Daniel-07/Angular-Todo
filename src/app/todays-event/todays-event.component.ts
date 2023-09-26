import { Component, Input, OnInit } from '@angular/core';
import { EventDataService } from '../service/event.service';

@Component({
  selector: 'app-todays-event',
  templateUrl: './todays-event.component.html',
  styleUrls: ['./todays-event.component.css']
})
export class TodaysEventComponent {
  @Input() eventList: any;
  
  todayDate = new Date();
  month = this.todayDate.getMonth() + 1;
  dateParts = String(this.todayDate).split(" ");
  day = this.dateParts[2];
  year = this.dateParts[3];

  private addLeadingZero(num: number): string {
    return num < 10 ? `0${num}` : `${num}`;
  }

  today: any = `${this.year}-${this.addLeadingZero(this.month)}-${this.addLeadingZero(parseInt(this.day))}`;

  compareDates(event1:any,event2:any){
    if(event1===event2){
      return true;
    }
    return false;
  }
  constructor(private eventDataService: EventDataService) {}

  ngOnInit(): void {
    this.eventList = this.eventDataService.getEventData();
  }
}
