import { Component, Input, OnInit } from '@angular/core';
import { EventDataService } from '../service/event.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css']
})
export class EventListComponent implements OnInit{
  @Input() eventList: any;
  updateForm!: FormGroup;
  updateIndex:number=0;
  selectedEvent:any;
  showDetails:any=false;
  showList:any=true;
  showForm:any=false;


  updateEvent(index:number){
    this.selectedEvent = this.eventList[index];
    this.createUpdateForm();
    this.showList=false;
    this.showForm=true;
    this.updateIndex=index;
  }
  
  removeEvent(index: number) {
    if (index >= 0 && index < this.eventList.length) {
      this.eventList.splice(index, 1);
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
  saveEvent(){
    this.eventList[this.updateIndex]=this.updateForm.value;
    this.eventDataService.setEventData(this.eventList);
    console.log(this.updateForm.value);
    this.showForm=false;
    this.showList=true;
    console.log(this.eventList);
    console.log(this.updateForm.value);
  }
  createUpdateForm(){
    this.updateForm = this.fb.group({
      name: [this.selectedEvent.name, Validators.required],
      host: [this.selectedEvent.host, Validators.required],
      location: [this.selectedEvent.location, Validators.required],
      date: [this.selectedEvent.date, Validators.required],
    });
  }


  ngOnInit(): void {
    this.eventList = this.eventDataService.getEventData();
    this.updateIndex;

    console.log(this.updateIndex);
  }
  
  
constructor(private eventDataService: EventDataService, private fb: FormBuilder) {}

}


