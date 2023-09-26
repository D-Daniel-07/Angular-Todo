import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EventFormComponent } from './event-form/event-form.component';
import { EventListComponent } from './event-list/event-list.component';
import { TodaysEventComponent } from './todays-event/todays-event.component';
import { EventDataService } from './service/event.service';

@NgModule({
  declarations: [
    AppComponent,
    EventFormComponent,
    EventListComponent,
    TodaysEventComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [EventDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
