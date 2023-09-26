import { Component, Input ,OnInit} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { EventDataService } from '../service/event.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-event-form',
  templateUrl: './event-form.component.html',
  styleUrls: ['./event-form.component.css']
})
export class EventFormComponent implements OnInit{
  eventForm!: FormGroup;
  eventList: any[] = [];

  addEvent() {
    if (this.eventForm.valid) {
      const newEvent = this.eventForm.value;
      alert('Event Added Successfully');
      this.eventDataService.setEventData([...this.eventList, newEvent]);
      this.eventForm.reset();
    } else {
      alert('Enter All Event Details');
    }
  }
  constructor(private fb: FormBuilder,private eventDataService: EventDataService) {}

  ngOnInit(): void {
    this.eventList = this.eventDataService.getEventData();
    this.eventForm = this.fb.group({
      name: ['', Validators.required],
      host: ['', Validators.required],
      location: ['', Validators.required],
      date: ['', Validators.required],
    });
  }
}







