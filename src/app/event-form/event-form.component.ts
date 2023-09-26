import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { EventDataService } from '../service/event.service';
@Component({
  selector: 'app-event-form',
  templateUrl: './event-form.component.html',
  styleUrls: ['./event-form.component.css']
})
export class EventFormComponent {
  selectedEvent:any={};
  eventList: any[] = [];
  newName: any = '';
  newHost: any = '';
  newLocation: any = '';
  newDate: any = '';

  addEvent() {
    if (this.newName === '' || this.newHost === '' || this.newLocation === '' || this.newDate === '') {
      alert("Enter All Event Details");
    } else {
      const newEvent = {
        name: this.newName,
        host: this.newHost,
        location: this.newLocation,
        date: this.newDate
      };
      alert("Event Added Successfully");
      this.eventDataService.setEventData([...this.eventList, newEvent]);
      this.newName = '';
      this.newHost = '';
      this.newLocation = '';
      this.newDate = '';
    }
  }
  constructor(private eventDataService: EventDataService) { }

  ngOnInit(): void {
    this.eventList = this.eventDataService.getEventData();
  }
  
}







