import { Component, Input, OnInit } from '@angular/core';
import { EventDataService } from '../service/event.service';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css']
})
export class EventListComponent implements OnInit{
  @Input() eventList: any;
  selectedEvent:any;
  showDetails:any=false;
  showList:any=true;

  
  removeEvent(index: number) {
    if (index >= 0 && index < this.eventList.length) {
      this.eventList.splice(index, 1);
  
      // Use the service to update the event data
      this.eventDataService.setEventData(this.eventList);
    }
  }
  selectEvent(index: number) {
    if (index >= 0 && index < this.eventList.length) {
      this.selectedEvent = this.eventList[index];
      this.showDetails=true;
      this.showList=false;
    }
  }
  compareEvents(event1:any,event2:any){
    if(event1===event2){
      return true;
    }
    return false;
  }
  hideDetails(){
    this.showDetails=false;
    this.showList=true;
  }


  ngOnInit(): void {
    // Use the service to get the event data
    this.eventList = this.eventDataService.getEventData();
  }
  
  
constructor(private eventDataService: EventDataService) {}

}


