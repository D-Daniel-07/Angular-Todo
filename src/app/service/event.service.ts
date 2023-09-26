import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EventDataService {
  private eventList: any[] = [];

  constructor() {}

  // Method to set event data
  setEventData(events: any[]): void {
    this.eventList = events;
  }

  // Method to get event data
  getEventData(): any[] {
    return this.eventList;
  }
}
