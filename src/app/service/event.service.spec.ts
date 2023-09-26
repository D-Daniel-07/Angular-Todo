import { TestBed } from '@angular/core/testing';

import { EventDataService } from '../service/event.service';

describe('EventService', () => {
  let service: EventDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EventDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
