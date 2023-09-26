import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodaysEventComponent } from './todays-event.component';

describe('TodaysEventComponent', () => {
  let component: TodaysEventComponent;
  let fixture: ComponentFixture<TodaysEventComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TodaysEventComponent]
    });
    fixture = TestBed.createComponent(TodaysEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
